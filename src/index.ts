import axios from 'axios';
import { Server, ServerCredentials } from '@grpc/grpc-js';
import cron from 'node-cron';

import { AppService } from '../interface/app_grpc_pb';
import { constants, env } from './config';
import { $AccountController, $ProfileController, $TransactionController } from './controllers';
import { $Account, $Profile, $Transaction } from './models';
import $Service from './service';

const ac = new $AccountController($Account);
const pc = new $ProfileController($Profile);
const tc = new $TransactionController($Transaction);
const service = new $Service(ac, pc, tc);

const task = cron.schedule('0 */3 * * *', async () => {
  const accounts = await ac.getAllAccountIds();
  for (let account of accounts) {
    try {
      let res = await axios.get(`${constants.MONO_BASE_URL}/accounts/${account.toHexString()}/sync`, {
        headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } 
      });
      if (res.data?.status !== 'successful') {
        if (res.data?.code === 'REAUTHORIZATION_REQUIRED') {
          await ac.setReauth(account.toHexString(), true);
          continue;
        }
        console.error(res.data);
        continue;
      }
      await tc.fetchTransactions(account.toHexString());
    } catch {}
  }
});

const server = new Server({ 'grpc.max_receive_message_length': 32 * 1024 * 1024 });

server.addService(
  AppService,
  service,
);

server.bindAsync(env.APP_PORT, ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
  if (err != null) {
    console.error(err);
    return;
  }
  
  function shutdown() {
    server.tryShutdown(() => console.log('shutdown gracefully'));
    task.stop();
  }

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  console.log(`service starting up at port ${port}...`);
  server.start();
});

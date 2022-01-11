import { ok } from 'assert';
import axios from 'axios';
import { Metadata } from '@grpc/grpc-js';
import { Model, Types } from 'mongoose';

import { ListAccountTransactionsRequest, SortOrder, TransactionDetails } from '../../interface/app_pb';
import { constants, env } from '../config';
import { InternalError, NotFoundError, ValidationError } from '../errors';
import { ITransaction} from '../models';

export interface ITransactionController {
  getTransaction(md: Metadata, account_id: string, id: string): Promise<TransactionDetails>;
  listTransactions(md: Metadata, req: ListAccountTransactionsRequest): Promise<[ transactions: TransactionDetails[], count: number ]>;
  scrub(md: Metadata, accounts: Types.ObjectId[]): Promise<void>;
  add(transaction: ITransaction): Promise<void>;
  fetchTransactions(account: string): Promise<void>;
}

export default class implements ITransactionController {
  constructor(
    private readonly dbcon: Model<ITransaction>,
  ){}

  public async getTransaction(md: Metadata, account_id: string, id: string): Promise<TransactionDetails> {
    const transaction = await this.dbcon.findOne({ account_id: new Types.ObjectId(account_id), _id: new Types.ObjectId(id) });
    if (transaction == null) throw new NotFoundError('transaction');
    return transaction.asPB();
  }

  public async listTransactions(md: Metadata, req: ListAccountTransactionsRequest): Promise<[transactions: TransactionDetails[], count: number]> {
    const page = req.getPage() || 1;
    const limit = req.getLimit() || 1;

    ok(page > 1, new ValidationError('page must be >= 1'));
    ok(limit > 1, new ValidationError('limit must be >= 1'));

    const options = {
      date: req.getOrder() == SortOrder.CHRONO_ASC ? -1 : 1,
      skip: (page - 1) * limit,
      limit,
    };

    const filter: any = {
      account_id: new Types.ObjectId(req.getId()),
    };
    if (req.getTag() != null) {
      switch (req.getTag()!.getValue()) {
        case true:
          filter['credit'] = {$ne: null};
          break;
        default:
          filter['debit'] = {$ne: null};
          break;
      }
    }

    const transactions = await this.dbcon.find(filter, null, options);
    const count = await this.dbcon.count(filter);

    return [ transactions.map(t => t.asPB()), count ];
  }

  public async scrub(md: Metadata, accounts: Types.ObjectId[]): Promise<void> {
    await this.dbcon.deleteMany({ account_id: { $in: accounts } });
  }

  public async add(transaction: ITransaction): Promise<void> {
    await this.dbcon.create(transaction);
  }

  public async fetchTransactions(account: string): Promise<void> {
    const acc_id = new Types.ObjectId(account);
    let transaction = await this.dbcon.findOne({ account_id: new Types.ObjectId(account) }, { date: true }, { sort: { date: -1, _id: -1 } });
    const now = new Date();
    let lastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 28);
    if (transaction != null) lastDate = transaction.date;
    let res = await axios.get(`${constants.MONO_BASE_URL}/accounts/${account}/transactions`, {
      params: { start: lastDate.toLocaleDateString('en-GB').replace(/\//g, '-'), end: now.toLocaleDateString('en-GB').replace(/\//g, '-'), paginate: false },
      headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } 
    });
    if (res.status != 200) throw new InternalError(res.data);

    // TODO: implement deduplication
    if (res.data.data != null) {
      for (let tr of res.data.data) {
        await this.dbcon.create({
          date: new Date(tr.date),
          account_id: acc_id,
          credit: tr.type === 'credit' ? tr.amount : null,
          debit: tr.type === 'debit' ? tr.amount : null,
          currency: tr.currency,
          narration: tr.narration,
          balance: tr.balance,
        });
      }
    }
  }
}

import { handleUnaryCall, Metadata, ServiceError } from '@grpc/grpc-js';
import axios from 'axios';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import { IAppServer } from '../../interface/app_grpc_pb';
import {
  AccountDetails, CreateProfileRequest, Credentials,
  GetAccountTransactionRequest, GetReauthCodeResponse,
  ID, LinkAccountRequest, ListAccountTransactionsRequest,
  ListAccountTransactionsResponse, ListLinkedAccountsRequest,
  ListLinkedAccountsResponse, MonoEvent, ProfileDetails,
  ProfileDetailsAndJWT, TransactionDetails
} from '../../interface/app_pb';
import { constants, env } from '../config';
import { IAccountController, IProfileController, ITransactionController } from '../controllers';
import { ErrorBase, InternalError } from '../errors';

export default class implements IAppServer {
  constructor(
    private readonly ac: IAccountController,
    private readonly pc: IProfileController,
    private readonly tc: ITransactionController,
  ){}

  [key: string]: any;

  public createProfile: handleUnaryCall<CreateProfileRequest, ProfileDetails> = async (call, callback) => {
    let [ err, res ] : [ err: ServiceError | null, res: ProfileDetails | null ] = [ null, null ];
    try {
      res = await this.pc.createProfile(call.metadata, call.request);
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public login: handleUnaryCall<Credentials, ProfileDetailsAndJWT> = async (call, callback) => {
    let [ err, profileAndJWT ] : [ err: ServiceError | null, res: ProfileDetailsAndJWT | null ] = [ null, null ];
    try {
      profileAndJWT = await this.pc.login(call.metadata, call.request.getEmail(), call.request.getPassword());
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, profileAndJWT);
  };

  public getProfile: handleUnaryCall<Empty, ProfileDetails> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: ProfileDetails | null ] = [ null, null ];
    try {
      res = await this.pc.getProfile(call.metadata);
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public deleteProfile: handleUnaryCall<Empty, Empty> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: Empty | null ] = [ null, null ];
    try {
      const accounts = await this.ac.scrub(call.metadata);
      await this.tc.scrub(call.metadata, accounts);
      await this.pc.deleteProfile(call.metadata);
      res = new Empty();
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public linkAccount: handleUnaryCall<LinkAccountRequest, AccountDetails> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: AccountDetails | null ] = [ null, null ];
    try {
      res = await this.ac.linkAccount(call.metadata, call.request.getCode());
      await this.pc.linkedAccount(call.metadata);
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public unlinkAccount: handleUnaryCall<ID, Empty> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: Empty | null ] = [ null, null ];
    try {
      await this.ac.unlinkAccount(call.metadata, call.request.getId());
      res = new Empty();
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public getLinkedAccount: handleUnaryCall<ID, AccountDetails> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: AccountDetails | null ] = [ null, null ];
    try {
      res = await this.ac.getAccount(call.metadata, call.request.getId());
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public listLinkedAccounts: handleUnaryCall<ListLinkedAccountsRequest, ListLinkedAccountsResponse> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res, meta ] : [ err: ServiceError | null, res: ListLinkedAccountsResponse | null, meta: Metadata ] = [ null, null, new Metadata() ];
    try {
      const [ accounts, count ] = await this.ac.listAccounts(call.metadata, call.request);
      res = new ListLinkedAccountsResponse();
      res.setAccountsList(accounts);
      meta.set('x-total-count', count.toString());
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res, meta);
  };

  public getAccountTransaction: handleUnaryCall<GetAccountTransactionRequest, TransactionDetails> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: TransactionDetails | null ] = [ null, null ];
    try {
      await this.ac.getAccount(call.metadata, call.request.getAccountId());
      res = await this.tc.getTransaction(call.metadata, call.request.getAccountId(), call.request.getTransactionId());
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public listAccountTransactions: handleUnaryCall<ListAccountTransactionsRequest, ListAccountTransactionsResponse> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res, meta ] : [ err: ServiceError | null, res: ListAccountTransactionsResponse | null, meta: Metadata ] = [ null, null, new Metadata() ];
    try {
      const [ transactions, count ] = await this.tc.listTransactions(call.metadata, call.request);
      res = new ListAccountTransactionsResponse();
      res?.setTransactionsList(transactions);
      meta.set('x-total-count', count.toString());
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res, meta);
  };

  public getReauthCode: handleUnaryCall<ID, GetReauthCodeResponse> = async (call, callback) => {
    call.metadata.set('uid', JSON.parse(Buffer.from(call.metadata.get('claims')[0]).toString('ascii')).uid);
    let [ err, res ] : [ err: ServiceError | null, res: GetReauthCodeResponse | null ] = [ null, null ];
    try {
      await this.ac.getAccount(call.metadata, call.request.getId());
      let response = await axios.get(`${constants.MONO_BASE_URL}/accounts/${call.request.getId()}/reauthorize`, {
        headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } 
      });
      if (response.data?.token == null) {
        throw new InternalError(response.data?.message ?? 'an error occured');
      }
      res = new GetReauthCodeResponse();
      res.setCode(response.data.token);
    } catch (e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };

  public webHook: handleUnaryCall<MonoEvent, Empty> = async (call, callback) => {
    let [ err, res ] : [ err: ServiceError | null, res: Empty | null ] = [ null, null ];
    try {
      const event = call.request.getEvent();
      const account = call.request.getData()!.getAccount()!.getId();
      switch (event) {
        case "mono.events.account_updated":
          await this.tc.fetchTransactions(account);
          break;
        case "mono.events.reauthorisation_required":
          await this.ac.setReauth(account, true);
          break;
        case "mono.events.account_reauthorized":
          await this.ac.setReauth(account, false);
          break;
      }
      res = new Empty();
    } catch(e) {
      if (e instanceof ErrorBase) {
        err = e;
      } else {
        err = new InternalError((e as Error).message);
      }
    }
    callback(err, res);
  };
}

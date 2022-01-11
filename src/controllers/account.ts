import { ok } from 'assert';
import { Metadata } from '@grpc/grpc-js';
import axios from 'axios';
import { Model, Types } from 'mongoose';

import { AccountDetails, ListLinkedAccountsRequest } from '../../interface/app_pb';
import { constants, env } from '../config';
import { InternalError, NotFoundError, PermissionError, ValidationError } from '../errors';
import { IAccount } from '../models';

export interface IAccountController {
  linkAccount(md: Metadata, code: string): Promise<AccountDetails>;
  unlinkAccount(md: Metadata, id: string): Promise<void>;
  getAccount(md: Metadata, id: string): Promise<AccountDetails>;
  listAccounts(md: Metadata, req: ListLinkedAccountsRequest): Promise<[ accounts: AccountDetails[], count: number ]>;
  setReauth(id: string, status: boolean): Promise<void>;
  scrub(md: Metadata): Promise<Types.ObjectId[]>;
  getAllAccountIds(): Promise<Types.ObjectId[]>;
}

export default class implements IAccountController {
  constructor(
    private readonly dbcon: Model<IAccount>,
  ){}

  public async linkAccount(md: Metadata, code: string): Promise<AccountDetails> {
    let res = await axios.post(`${constants.MONO_BASE_URL}/account/auth`, { code }, { headers: { 'mono-sec-key': env.MONO_KEY } });
    if (res.status != 200 || res.data.id == null) throw new InternalError(res.data);
    const { id } = res.data;
    res = await axios.get(`${constants.MONO_BASE_URL}/accounts/${id}`, { headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } });

    if (res.status != 200 || res.data.account == null) throw new InternalError(res.data);
    const {
      _id = null,
      name,
      bvn,
      accountNumber,
      type,
      institution,
    } = res.data.account;
    const {
      name: institutionName,
    } = institution;

    const acc = await this.dbcon.create({
      profile_id: md.get('uid')[0] as string,
      bvn,
      date_added: new Date(),
      account_id: _id,
      account_name: type,
      account_nuban: accountNumber,
      account_user: name,
      bank_name: institutionName,
    });

    return acc.asPB();
  }

  public async unlinkAccount(md: Metadata, id: string): Promise<void> {
    const uid = md.get('uid')[0] as string;
    ok(await this.dbcon.findOne({ profile_id: new Types.ObjectId(uid), _id: new Types.ObjectId(id) }) != null, new PermissionError('cannot unlink an account that does not belong to you'));
    let res = await axios.post(`${constants.MONO_BASE_URL}/accounts/${id}/unlink`, {}, { headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } });
    if (res.status != 200) throw new InternalError(res.data);
    const acc = await this.dbcon.findByIdAndDelete(id);
    if (acc == null) throw new NotFoundError('account');
  }

  public async getAccount(md: Metadata, id: string): Promise<AccountDetails> {
    const uid = md.get('uid')[0] as string;
  
    const acc = await this.dbcon.findOne({ profile_id: new Types.ObjectId(uid), _id: new Types.ObjectId(id) });
    if (acc == null) throw new NotFoundError('account');
    return acc.asPB();
  }

  public async listAccounts(md: Metadata, req: ListLinkedAccountsRequest): Promise<[accounts: AccountDetails[], count: number]> {
    const uid = md.get('uid')[0] as string;

    const page = req.getPage() || 1;
    const limit = req.getLimit() || 1;

    ok(page > 1, new ValidationError('page must be >= 1'));
    ok(limit > 1, new ValidationError('limit must be >= 1'));

    const filter = { profile_id: new Types.ObjectId(uid) };
    const accs = await this.dbcon.find(filter, null, { skip: (page - 1) * limit, limit: limit });
    const count = await this.dbcon.count(filter);

    return [ accs.map((v) => v.asPB()), count ];
  }

  public async setReauth(id: string, status: boolean): Promise<void> {
    await this.dbcon.updateOne({ _id: new Types.ObjectId(id) }, { $set: { reauth_required: status } });
  }

  public async scrub(md: Metadata): Promise<Types.ObjectId[]> {
    const uid = md.get('uid')[0] as string;
    
    const filter = { profile_id: new Types.ObjectId(uid) };
    const accounts = await this.dbcon.find(filter, {_id: true});

    for (let a of accounts) {
      let res = await axios.post(`${constants.MONO_BASE_URL}/accounts/${a._id.toHexString()}/unlink`, {}, { headers: { 'content-type': 'application/json', 'mono-sec-key': env.MONO_KEY } });
      if (res.status != 200) throw new InternalError(res.data);
    }
    
    await this.dbcon.deleteMany(filter);
    return accounts.map(a => a._id);
  }

  public async getAllAccountIds(): Promise<Types.ObjectId[]> {
    const accounts = await this.dbcon.find({}, {_id: true});
    return accounts.map(a => a._id);
  }
}

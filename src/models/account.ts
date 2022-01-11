import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Document, Schema, Types } from 'mongoose';

import { AccountDetails } from '../../interface/app_pb';
import db from '../database';

export const AccountCollection = 'accounts';

// TODO: add balance
export interface IAccount extends Document {
  _id: Types.ObjectId;
  profile_id: Types.ObjectId;
  bvn: string;
  date_added: Date;
  account_id: Types.ObjectId;
  account_name: string;
  account_nuban: string;
  account_user: string;
  bank_name: string;
  reauth_required: boolean;

  asPB(): AccountDetails
}

const AccountSchema: Schema = new Schema({
  bvn: {
    type: String,
    default: '',
  },
  profile_id: {
    type: Types.ObjectId,
    required: true,
    ref: 'Profile'
  },
  date_added: {
    type: Date,
  },
  account_id: {
    type: Types.ObjectId,
  },
  account_name: {
    type: String,
    default: '',
  },
  account_nuban: {
    type: String,
    default: '',
  },
  account_user: {
    type: String,
    default: '',
  },
  bank_name: {
    type: String,
    default: '',
  },
  reauth_required: {
    type: Boolean,
    default: false,
  },
}, {
  id: false,
});

AccountSchema.method({
  asPB(): AccountDetails {
    const res = new AccountDetails();

    res.setId(this._id.toHexString());
    res.setBvn(this.bvn);
    res.setDateAdded(Timestamp.fromDate(this.date_added));
    res.setBankName(this.bank_name);
    res.setAccountName(this.account_name);
    res.setAccountNuban(this.account_nuban);
    res.setAccountUser(this.account_user);
    res.setAccountId(this.account_id.toHexString());
    res.setReauthRequired(this.reauth_required);

    return res;
  },
});

export default db.model<IAccount>('Account', AccountSchema, AccountCollection);

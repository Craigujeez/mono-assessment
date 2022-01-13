import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Document, Schema, Types } from 'mongoose';

import { TransactionDetails } from '../../interface/app_pb';
import db from '../database';

export const TransactionCollection = 'transactions';

export interface ITransaction extends Document {
  _id: Types.ObjectId;
  created_at: Date;
  date: Date;
  account_id: Types.ObjectId;
  credit?: number;
  debit?: number;
  currency: string;
  narration: string;
  balance: number;

  asPB(): TransactionDetails;
}

const TransactionSchema: Schema = new Schema({
  date: {
    type: Date,
  },
  account_id: {
    type: Types.ObjectId,
    required: true,
  },
  credit: {
    type: Number,
    default: null
  },
  debit: {
    type: Number,
    default: null
  },
  currency: {
    type: String,
    default: '',
  },
  narration: {
    type: String,
    default: '',
  },
  balance: {
    type: Number,
  },
}, {
  id: false,
  timestamps: {
    createdAt: 'created_at',
  }
});

TransactionSchema.method({
  asPB(): TransactionDetails {
    const res = new TransactionDetails();

    res.setId(this._id.toHexString());
    res.setDate(Timestamp.fromDate(this.date));
    res.setCreatedAt(Timestamp.fromDate(this.created_at));
    res.setCurrency(this.currency);
    res.setBalance(this.balance);
    res.setAccountId(this.account_id.toHexString());
    res.setNarration(this.narration);

    if (this.credit == null) {
      res.setDebit(this.debit);
    } else {
      res.setCredit(this.credit);
    }

    return res;
  },
});

export default db.model<ITransaction>('Transaction', TransactionSchema, TransactionCollection);

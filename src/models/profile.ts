import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Document, Schema, Types } from 'mongoose';

import { ProfileDetails } from '../../interface/app_pb';
import db from '../database';

export const ProfileCollection = 'profiles';

export interface IProfile extends Document {
  _id: Types.ObjectId;
  created_at: Date;
  updated_at: Date;
  name: string;
  email: string;
  password: string;
  has_linked_account: boolean;

  asPB(): ProfileDetails
}

const ProfileSchema: Schema = new Schema({
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    requried: true,
  },
  has_linked_account: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
});

ProfileSchema.method({
  asPB(): ProfileDetails {
    const res = new ProfileDetails();

    res.setName(this.name);
    res.setEmail(this.email);
    res.setId(this._id.toHexString());
    res.setCreatedAt(Timestamp.fromDate(this.created_at));
    res.setUpdatedAt(Timestamp.fromDate(this.updated_at));
    res.setHasLinkedAccount(this.has_linked_account);

    return res;
  },
});

export default db.model<IProfile>('Profile', ProfileSchema, ProfileCollection);

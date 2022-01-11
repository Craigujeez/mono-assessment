import { ok } from 'assert';
import bcrypt from 'bcrypt';
import { Metadata } from '@grpc/grpc-js';
import { importJWK, SignJWT } from 'jose';
import { Model, Types } from 'mongoose';

import { CreateProfileRequest, ProfileDetails, ProfileDetailsAndJWT } from '../../interface/app_pb';
import { env } from '../config';
import { AuthenticationError, NotFoundError, ValidationError } from '../errors';
import { IProfile } from '../models';

export interface IProfileController {
  createProfile(md: Metadata, req: CreateProfileRequest): Promise<ProfileDetails>;
  getProfile(md: Metadata): Promise<ProfileDetails>;
  deleteProfile(md: Metadata): Promise<void>;
  linkedAccount(md: Metadata): Promise<void>;
  login(md: Metadata, email: string, password: string): Promise<ProfileDetailsAndJWT>;
}

export default class implements IProfileController {
  constructor(
    private readonly dbcon: Model<IProfile>,
  ){}

  public async createProfile(md: Metadata, req: CreateProfileRequest): Promise<ProfileDetails> {
    ok(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(req.getEmail()), new ValidationError('invalid email'));
    ok(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(req.getPassword()), new ValidationError('password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'));

    const usr = await this.dbcon.create({
      name: req.getName(),
      email: req.getEmail(),
      password: bcrypt.hashSync(req.getPassword(), bcrypt.genSaltSync(10)),
    });
    return usr.asPB();
  }

  public async getProfile(md: Metadata): Promise<ProfileDetails> {
    const uid = md.get('uid')[0] as string;

    const usr = await this.dbcon.findById(uid);
    if (usr == null) throw new NotFoundError('user');
    return usr.asPB();
  }

  public async deleteProfile(md: Metadata): Promise<void> {
    const uid = md.get('uid')[0] as string;
    
    const usr = await this.dbcon.findByIdAndRemove(uid);
    if (usr == null) throw new NotFoundError('user');
  }

  public async linkedAccount(md: Metadata): Promise<void> {
    const uid = md.get('uid')[0] as string;
    await this.dbcon.findByIdAndUpdate(uid, { $set: { has_linked_account: true } });
  }

  public async login(md: Metadata, email: string, password: string): Promise<ProfileDetailsAndJWT> {
    const usr = await this.dbcon.findOne({ email: email.toLowerCase() });
    if (usr == null) throw new NotFoundError('user');
    if (!await this.compareHashAndPassword(password, usr.password)) throw new AuthenticationError('Invalid credentials');

    const token = await this.generateToken(usr._id, usr.email);

    const res = new ProfileDetailsAndJWT();
    res.setJwt(token);
    res.setProfile(usr.asPB());

    return res;
  }

  private async compareHashAndPassword(plain: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plain, hash);
  }

  private async generateToken(uid: Types.ObjectId, email: string): Promise<string> {
    const privateKey = await importJWK({
      alg: 'ES256',
      crv: 'P-256',
      kty: 'EC',
      use: 'sig',
      kid: env.JWT_KEYS.kid,
      d: env.JWT_KEYS.d,
      x: env.JWT_KEYS.x,
      y: env.JWT_KEYS.y,
    }, 'ES256');

    const claims = {
      uid: uid.toHexString(),
      email
    };

    const jwt = await new SignJWT(claims)
      .setProtectedHeader({ alg: 'ES256' })
      .setIssuedAt()
      .setIssuer('eseosala:mono')
      .setAudience('mono:user')
      .setExpirationTime('24h')
      .sign(privateKey);

    return jwt;
  }
}

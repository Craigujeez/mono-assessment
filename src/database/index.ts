import { createConnection } from 'mongoose';
import { env } from '../config';

export default createConnection(env.DB_URL, {});

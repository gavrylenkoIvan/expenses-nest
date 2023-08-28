import * as dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({ path: resolve(__dirname, '../.env') });

const jwtSecret = process.env.JWT_SECRET;

const pg = {
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
};

const cron = {
  EVERY_MONTH: '0 0 1 * *',
  EVERY_WEEK: '0 0 * * 0',
  EVERY_DAY: '0 0 * * *',
};

export { jwtSecret, pg, cron };

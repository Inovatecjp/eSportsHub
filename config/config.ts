import dotenv from 'dotenv';
import { Dialect } from 'sequelize';


dotenv.config();

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  logging: boolean;
}

const config: { [env: string]: DBConfig} = {
  development: {
    username: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || '',
    host: process.env.POSTGRES_HOST || '',
    port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5432,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || '',
    host: process.env.POSTGRES_HOST || '',
    port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5432,
    dialect: 'postgres',
    logging: false,
  }
};

export default config;

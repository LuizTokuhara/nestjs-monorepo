import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

if (!process.env['DB_USERNAME']) {
  dotenv.config({ path: './apps/backend/.env' });
}

const domain = 'user';
const modulePath = `./libs/backend/modules/${domain}`;
const migrationsDir = `./migrations/${domain}`;
const dbHost = process.env['DB_HOST'];
const dbPort = Number(process.env['DB_PORT']);
const dbUser = process.env['DB_USERNAME'];
const dbPassword = process.env['DB_PASSWORD'];

export const userDataSource = new DataSource({
  type: 'mysql',
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPassword,
  database: 'monorepo',
  migrations: [`${migrationsDir}/*.ts`],
  entities: process.argv.includes('migration:generate')
    ? [`${modulePath}/**/*.typeorm.model.{ts,js}`, `${modulePath}/**/*.entity.{ts,js}`]
    : [],
  synchronize: false 
})

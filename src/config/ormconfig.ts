import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/modules/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  extra: {
    validateConnection: false,
    trustServerCertificate: true,
  },
});

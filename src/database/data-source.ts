import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';

export default new DataSource({
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
  synchronize: false,
  dropSchema: false,
  logging: false,
  logger: 'file',
  // subscribers: ['src/subscriber/**/*.ts'],
  // migrationsTableName: 'migration_table',
});

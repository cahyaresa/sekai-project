import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

  entities = [
    __dirname + '/../../modules/**/*.entity{.ts,.js}',
    __dirname + '/../../modules/**/*.view-entity{.ts,.js}',
  ];

  get mssqlConfig(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: this.configService.get<string>('DB_HOST'),
      port: +this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      entities: this.entities,
      migrations: this.migrations,
      synchronize: false,
      extra: {
        trustServerCertificate: true,
      },
    };
  }
}

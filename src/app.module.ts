import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './shared/services/api-config.services';
import { SharedModule } from './shared/shared.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { TrainersModule } from './modules/trainers/trainers.module';

const ApiModules = [SharedModule];

@Module({
  imports: [
    ...ApiModules,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      // useFactory: (configService: ApiCustomConfigService) => {
      //   return { ...configService.mssqlConfig };
      // },
      // inject: [ApiCustomConfigService],

      imports: [SharedModule],
      // useFactory: (configService: ApiConfigService) => {
      //   return { ...configService.createTypeOrmOptions };
      // },
      useClass: ApiConfigService,
    }),
    TrainersModule,
    PokemonModule,
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'sa',
    //   password: 'Astra@2022',
    //   database: 'pokemon',
    //   entities: [],
    //   extra: {
    //     trustServerCertificate: true,
    //   },
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

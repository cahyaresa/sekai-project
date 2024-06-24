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
      imports: [ConfigModule],
      useFactory: (configService: ApiConfigService) => {
        return { ...configService.mssqlConfig };
      },
      inject: [ApiConfigService],
    }),
    TrainersModule,
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

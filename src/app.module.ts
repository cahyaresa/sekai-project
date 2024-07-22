import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './shared/services/api-config.services';
import { SharedModule } from './shared/shared.module';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { TrainersModule } from './modules/trainers/trainers.module';
import { SpeciesModule } from './modules/species/species.module';
import { TypeModule } from './modules/type/type.module';
import { AbilitiesModule } from './modules/abilities/abilities.module';
import { EggGroupsModule } from './modules/egg-groups/egg-groups.module';
import { PokemonEgggroupsModule } from './modules/pokemon-egggroups/pokemon-egggroups.module';

const ApiModules = [
  SharedModule,
  TrainersModule,
  PokemonModule,
  EggGroupsModule,
  SpeciesModule,
  TypeModule,
  AbilitiesModule,
];

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
    EggGroupsModule,
    PokemonEgggroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

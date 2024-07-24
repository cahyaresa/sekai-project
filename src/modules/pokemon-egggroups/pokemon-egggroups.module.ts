import { Module } from '@nestjs/common';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';
import { PokemonEgggroupsController } from './pokemon-egggroups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEgggroupEntity } from './entities/pokemon-egggroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEgggroupEntity])],
  controllers: [PokemonEgggroupsController],
  providers: [PokemonEgggroupsService],
})
export class PokemonEgggroupsModule {}

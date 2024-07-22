import { Module } from '@nestjs/common';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';
import { PokemonEgggroupsController } from './pokemon-egggroups.controller';

@Module({
  controllers: [PokemonEgggroupsController],
  providers: [PokemonEgggroupsService],
})
export class PokemonEgggroupsModule {}

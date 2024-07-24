import { Module } from '@nestjs/common';
import { PokemonSpeciesService } from './pokemon-species.service';
import { PokemonSpeciesController } from './pokemon-species.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonSpecy } from './entities/pokemon-specy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonSpecy])],
  controllers: [PokemonSpeciesController],
  providers: [PokemonSpeciesService],
})
export class PokemonSpeciesModule {}

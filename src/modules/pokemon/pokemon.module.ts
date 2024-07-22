import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntities } from './entities/pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonEntities])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}

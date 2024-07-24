import { Module } from '@nestjs/common';
import { PokemonAbilitiesService } from './pokemon-abilities.service';
import { PokemonAbilitiesController } from './pokemon-abilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonAbility } from './entities/pokemon-ability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonAbility])],
  controllers: [PokemonAbilitiesController],
  providers: [PokemonAbilitiesService],
})
export class PokemonAbilitiesModule {}

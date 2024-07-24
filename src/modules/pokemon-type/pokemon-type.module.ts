import { Module } from '@nestjs/common';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonTypeController } from './pokemon-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonType } from './entities/pokemon-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokemonType])],
  controllers: [PokemonTypeController],
  providers: [PokemonTypeService],
})
export class PokemonTypeModule {}

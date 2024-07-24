import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AbstractDto } from 'src/common/abstract.dto';
import { PokemonSpecy } from '../entities/pokemon-specy.entity';

export class PokemonSpecies extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  pokemonSpeciesId: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  speciesId: number;

  constructor(pokemonSpecies: PokemonSpecy) {
    super(pokemonSpecies, { excludesFields: true });
    this.pokemonSpeciesId = pokemonSpecies.pokemonSpeciesId;
    this.pokemonId = pokemonSpecies.pokemonId;
    this.speciesId = pokemonSpecies.speciesId;
  }
}

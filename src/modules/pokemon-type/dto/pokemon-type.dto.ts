import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AbstractDto } from 'src/common/abstract.dto';
import { PokemonType } from '../entities/pokemon-type.entity';

export class PokemonTypeDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  pokemonTypeId: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  typeId: number;

  constructor(pokemonType: PokemonType) {
    super(pokemonType, { excludesFields: true });
    this.pokemonTypeId = pokemonType.pokemonTypeId;
    this.pokemonId = pokemonType.pokemonId;
    this.typeId = pokemonType.typeId;
  }
}

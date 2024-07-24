import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePokemonTypeDto {
  @ApiProperty()
  @IsNumber()
  pokemonTypeId: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  typeId: number;
}

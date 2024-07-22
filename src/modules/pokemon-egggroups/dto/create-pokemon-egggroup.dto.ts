import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePokemonEgggroupDto {
  @ApiProperty()
  @IsNumber()
  pokemonEgggroupid: number;

  @ApiProperty()
  @IsNumber()
  pokemonid: number;

  @ApiProperty()
  @IsNumber()
  eggGroupsId: number;
}

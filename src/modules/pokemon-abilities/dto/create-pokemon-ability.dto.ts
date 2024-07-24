import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePokemonAbilityDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  abilityId: number;
}

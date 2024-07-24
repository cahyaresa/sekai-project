import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePokemonSpecyDto {
  @ApiProperty()
  @IsNumber()
  pokemonSpeciesId: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  abilitiesId: number;
}

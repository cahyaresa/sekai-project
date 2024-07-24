import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AbstractDto } from 'src/common/abstract.dto';
import { PokemonAbility } from '../entities/pokemon-ability.entity';

export class pokemonAbilityDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  pokemonAbilitiesId: number;

  @ApiProperty()
  @IsNumber()
  pokemonId: number;

  @ApiProperty()
  @IsNumber()
  abilitiesId: number;

  constructor(pokemonAbilities: PokemonAbility) {
    super(pokemonAbilities, { excludesFields: true });
    this.pokemonAbilitiesId = pokemonAbilities.pokemonAbilitiesId;
    this.pokemonId = pokemonAbilities.pokemonId;
    this.abilitiesId = pokemonAbilities.abilitiesId;
  }
}

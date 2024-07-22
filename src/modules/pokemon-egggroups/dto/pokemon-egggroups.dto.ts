import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AbstractDto } from 'src/common/abstract.dto';
import { PokemonEgggroupEntity } from '../entities/pokemon-egggroup.entity';

export class PokemonEgggroupDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  pokemonEgggroupid: number;

  @ApiProperty()
  @IsNumber()
  pokemonid: number;

  @ApiProperty()
  @IsNumber()
  eggGroupsId: number;

  constructor(pokemomenEgggroups: PokemonEgggroupEntity) {
    super(pokemomenEgggroups, { excludesFields: true });
    this.pokemonEgggroupid = pokemomenEgggroups.pokemonEgggroupid;
    this.pokemonid = pokemomenEgggroups.pokemonId;
    this.eggGroupsId = pokemomenEgggroups.eggGroupsId;
  }
}

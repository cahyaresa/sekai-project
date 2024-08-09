import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { PokemonEntities } from '../entities/pokemon.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export class PokemonLiteInfoDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  readonly pokemonId: number;

  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  readonly pokedex: number;

  @ApiProperty()
  readonly sprite: string;

  constructor(pokemonEntity: PokemonEntities) {
    super(pokemonEntity, { excludesFields: true });
    this.pokemonId = pokemonEntity.pokemonId;
    this.name = pokemonEntity.name;
    this.pokedex = pokemonEntity.pokedex;
    this.sprite = pokemonEntity.sprite;
  }
}

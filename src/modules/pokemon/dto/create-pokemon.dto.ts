import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty()
  @IsNumber()
  readonly pokemonId: number;

  @ApiProperty()
  @IsString()
  readonly name: string;

  // @ApiProperty()
  // readonly type1id: number;

  // @ApiProperty()
  // readonly type2id: number;

  // @ApiProperty()
  // readonly speciesid: number;

  @ApiProperty()
  readonly height: string;

  @ApiProperty()
  readonly weight: string;

  // @ApiProperty()
  // readonly abilities1id: number;

  // @ApiProperty()
  // readonly abilities2id: number;

  // @ApiProperty()
  // readonly abilities3id: number;

  @ApiProperty()
  readonly evYield: string;

  @ApiProperty()
  readonly catchRate: string;

  @ApiProperty()
  readonly baseFriendship: number;

  @ApiProperty()
  readonly baseExp: number;

  @ApiProperty()
  readonly growthRate: string;

  // @ApiProperty()
  // readonly eggGroups1id: number;

  // @ApiProperty()
  // readonly eggGroups2id: number;

  @ApiProperty()
  readonly gender: string;

  @ApiProperty()
  readonly eggCycles: string;

  @ApiProperty()
  readonly hpBase: number;

  @ApiProperty()
  readonly hpMin: number;

  @ApiProperty()
  readonly hpMax: number;

  @ApiProperty()
  readonly attackBase: number;

  @ApiProperty()
  readonly attackMin: number;

  @ApiProperty()
  readonly attackMax: number;

  @ApiProperty()
  readonly defenseBase: number;

  @ApiProperty()
  readonly defenseMin: number;

  @ApiProperty()
  readonly defenseMax: number;

  @ApiProperty()
  readonly specialAttackBase: number;

  @ApiProperty()
  readonly specialAttackMin: number;

  @ApiProperty()
  readonly specialAttackMax: number;

  @ApiProperty()
  readonly specialDefenseBase: number;

  @ApiProperty()
  readonly specialDefenseMin: number;

  @ApiProperty()
  readonly specialDefenseMax: number;

  @ApiProperty()
  readonly speedBase: number;

  @ApiProperty()
  readonly speedMin: number;

  @ApiProperty()
  readonly speedMax: number;

  // @ApiProperty()
  // readonly sprite: string;
}

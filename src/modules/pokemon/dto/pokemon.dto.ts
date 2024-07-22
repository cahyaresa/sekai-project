import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { PokemonEntities } from '../entities/pokemon.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export class PokemonDto extends AbstractDto {
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

  @ApiProperty()
  readonly sprite: string;

  constructor(pokemonEntity: PokemonEntities) {
    super(pokemonEntity, { excludesFields: true });
    this.pokemonId = pokemonEntity.pokemonId;
    this.name = pokemonEntity.name;
    // this.type1id = pokemonEntity.type1id;
    // this.type2id = pokemonEntity.type2id;
    // this.speciesid = pokemonEntity.speciesid;
    this.height = pokemonEntity.height;
    this.weight = pokemonEntity.weight;
    // this.abilities1id = pokemonEntity.abiliities1id;
    // this.abilities2id = pokemonEntity.abilities2id;
    // this.abilities3id = pokemonEntity.abilities3id;
    this.evYield = pokemonEntity.evYield;
    this.catchRate = pokemonEntity.catchRate;
    this.baseFriendship = pokemonEntity.baseFriendship;
    this.baseExp = pokemonEntity.baseExp;
    this.growthRate = pokemonEntity.growthRate;
    // this.eggGroups1id = pokemonEntity.eggGroups1id;
    // this.eggGroups2id = pokemonEntity.eggGroups2id;
    this.gender = pokemonEntity.gender;
    this.eggCycles = pokemonEntity.eggCycles;
    this.hpBase = pokemonEntity.hpBase;
    this.hpMin = pokemonEntity.hpMin;
    this.hpMax = pokemonEntity.hpMax;
    this.attackBase = pokemonEntity.attackBase;
    this.attackMin = pokemonEntity.attackMin;
    this.attackMax = pokemonEntity.attackMax;
    this.defenseBase = pokemonEntity.defenseBase;
    this.defenseMin = pokemonEntity.defenseMin;
    this.defenseMax = pokemonEntity.defenseMax;
    this.specialAttackBase = pokemonEntity.specialAttackBase;
    this.specialAttackMin = pokemonEntity.specialAttackMin;
    this.specialAttackMax = pokemonEntity.specialAttackMax;
    this.speedBase = pokemonEntity.speedBase;
    this.speedMin = pokemonEntity.speedMin;
    this.speedMax = pokemonEntity.speedMax;
    this.sprite = this.sprite;
  }
}

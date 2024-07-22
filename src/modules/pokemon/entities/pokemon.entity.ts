import { UseDto } from 'src/decorators/use-dto.decorators';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeEntities } from 'src/modules/type/entities/type.entity';
import { SpeciesEntity } from '../../species/entities/species.entity';
import { AbilityEntities } from 'src/modules/abilities/entities/ability.entity';
import { EggGroup } from 'src/modules/egg-groups/entities/egg-group.entity';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PokemonDto } from '../dto/pokemon.dto';

@Entity('tbl_pokemon')
@UseDto(PokemonDto)
export class PokemonEntities extends AbstractEntity<PokemonDto> {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pokemonId' })
  pokemonId: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'bigint', name: 'type1id' })
  type1id: number;
  @ManyToMany(() => TypeEntities, (pokemonType1) => pokemonType1.typeId)
  @JoinColumn({
    name: 'pokemontype1id',
    referencedColumnName: 'typeid',
  })
  pokemonType1: TypeEntities;

  @Column({ type: 'bigint', name: 'type2id' })
  type2id: number;
  @ManyToMany(() => TypeEntities, (pokemonType2) => pokemonType2.typeId)
  @JoinColumn({
    name: 'pokemontype2id',
    referencedColumnName: 'typeid',
  })
  pokemonType2: TypeEntities;

  @Column({ type: 'bigint', name: 'speciesid' })
  speciesid: number;
  @ManyToMany(() => SpeciesEntity, (pokemonSpecies) => pokemonSpecies.speciesId)
  @JoinColumn({
    name: 'pokemonSpeciesId',
    referencedColumnName: 'speciesId',
  })
  pokemonSpecies: SpeciesEntity;

  @Column({ type: 'varchar', name: 'height' })
  height: string;

  @Column({ type: 'varchar', name: 'weight' })
  weight: string;

  @Column({ type: 'bigint', name: 'abilities1id' })
  abiliities1id: number;
  @ManyToMany(
    () => AbilityEntities,
    (pokemonAbilities1) => pokemonAbilities1.abilitiesId,
  )
  @JoinColumn({
    name: 'pokemonAbilities1id',
    referencedColumnName: 'abilitiesId',
  })
  pokemonAbilities1: AbilityEntities;

  @Column({ type: 'bigint', name: 'abilities2id' })
  abilities2id: number;
  @ManyToMany(
    () => AbilityEntities,
    (pokemonAbilities2) => pokemonAbilities2.abilitiesId,
  )
  @JoinColumn({
    name: 'pokemonAbilities2id',
    referencedColumnName: 'abilitiesId',
  })
  pokemonAbilities2: AbilityEntities;

  @Column({ type: 'bigint', name: 'abilities3id' })
  abilities3id: number;
  @ManyToMany(
    () => AbilityEntities,
    (pokemonAbilities3) => pokemonAbilities3.abilitiesId,
  )
  @JoinColumn({
    name: 'pokemonAbilities3id',
    referencedColumnName: 'abilitiesId',
  })
  pokemonAbilities3: AbilityEntities;

  @Column({ type: 'varchar', name: 'evYield' })
  evYield: string;

  @Column({ type: 'varchar', name: 'catchRate' })
  catchRate: string;

  @Column({ type: 'bigint', name: 'baseFriendship' })
  baseFriendship: number;

  @Column({ type: 'bigint', name: 'baseExp' })
  baseExp: number;

  @Column({ type: 'varchar', name: 'growthRate' })
  growthRate: string;

  @Column({ type: 'bigint', name: 'eggGroups1id' })
  eggGroups1id: number;
  @ManyToMany(() => EggGroup, (eggGroups1id) => eggGroups1id.eggGroupsId)
  @JoinColumn({
    name: 'eggGroups1id',
    referencedColumnName: 'eggGroupsId',
  })
  pokemonEggGroups1id: EggGroup;

  @Column({ type: 'bigint', name: 'eggGroups2id' })
  eggGroups2id: number;
  @ManyToMany(() => EggGroup, (eggGroups2id) => eggGroups2id.eggGroupsId)
  @JoinColumn({
    name: 'eggGroups2id',
    referencedColumnName: 'eggGroupsId',
  })
  pokemonEggGroups2id: EggGroup;

  @Column({ type: 'varchar', name: 'gender' })
  gender: string;

  @Column({ type: 'varchar', name: 'eggCycles' })
  eggCycles: string;

  @Column({ type: 'bigint', name: 'hpBase' })
  hpBase: number;

  @Column({ type: 'bigint', name: 'hpMin' })
  hpMin: number;

  @Column({ type: 'bigint', name: 'hpMax' })
  hpMax: number;

  @Column({ type: 'bigint', name: 'attackBase' })
  attackBase: number;

  @Column({ type: 'bigint', name: 'attackMin' })
  attackMin: number;

  @Column({ type: 'bigint', name: 'attackMax' })
  attackMax: number;

  @Column({ type: 'bigint', name: 'defenseBase' })
  defenseBase: number;

  @Column({ type: 'bigint', name: 'defenseMin' })
  defenseMin: number;

  @Column({ type: 'bigint', name: 'defenseMax' })
  defenseMax: number;

  @Column({ type: 'bigint', name: 'specialAttackBase' })
  specialAttackBase: number;

  @Column({ type: 'bigint', name: 'specialAttackMin' })
  specialAttackMin: number;

  @Column({ type: 'bigint', name: 'specialAttackMax' })
  specialAttackMax: number;

  @Column({ type: 'bigint', name: 'specialDefenseBase' })
  specialDefenseBase: number;

  @Column({ type: 'bigint', name: 'specialDefenseMin' })
  specialDefenseMin: number;

  @Column({ type: 'bigint', name: 'specialDefenseMax' })
  specialDefenseMax: number;

  @Column({ type: 'bigint', name: 'speedBase' })
  speedBase: number;

  @Column({ type: 'bigint', name: 'speedMin' })
  speedMin: number;

  @Column({ type: 'bigint', name: 'speedMax' })
  speedMax: number;

  @Column({ type: 'bigint', name: 'sprite' })
  sprite: string;
}

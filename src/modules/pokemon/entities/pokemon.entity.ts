import { PokemonEgggroupEntity } from './../../pokemon-egggroups/entities/pokemon-egggroup.entity';
import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PokemonDto } from '../dto/pokemon.dto';
import { PokemonAbility } from 'src/modules/pokemon-abilities/entities/pokemon-ability.entity';
import { PokemonSpecy } from 'src/modules/pokemon-species/entities/pokemon-specy.entity';

@Entity('tbl_pokemon')
@UseDto(PokemonDto)
export class PokemonEntities extends AbstractEntity<PokemonDto> {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pokemonId' })
  pokemonId: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'height' })
  height: string;

  @Column({ type: 'varchar', name: 'weight' })
  weight: string;

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

  @OneToMany(
    () => PokemonEgggroupEntity,
    (eggGroup) => eggGroup.pokemonEgggroupid,
  )
  eggGroup: PokemonEgggroupEntity[];

  @OneToMany(() => PokemonAbility, (ability) => ability.pokemonAbilitiesId)
  ability: PokemonAbility[];

  @OneToMany(
    () => PokemonSpecy,
    (pokemonSpecies) => pokemonSpecies.pokemonSpeciesId,
  )
  species: PokemonSpecy[];
}

import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AbilitiesDto } from '../dto/ability';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PokemonAbility } from 'src/modules/pokemon-abilities/entities/pokemon-ability.entity';

@Entity('tbl_abilities')
@UseDto(AbilitiesDto)
export class AbilityEntities extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'abilitiesId' })
  abilitiesId: number;

  @Column({ type: 'varchar', name: 'abilities' })
  abilities: string;

  @OneToMany(() => PokemonAbility, (pokemonAblity) => pokemonAblity.abilitiesId)
  pokemonAbility: PokemonAbility[];
}

import { AbstractEntity } from 'src/common/abstract.entity';
import { UseDto } from 'src/decorators/use-dto.decorators';
import { AbilityEntities } from 'src/modules/abilities/entities/ability.entity';
import { PokemonEntities } from 'src/modules/pokemon/entities/pokemon.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { pokemonAbilityDto } from '../dto/pokemon-ability.dto';

@Entity('rel_pokemonAbilities')
@UseDto(pokemonAbilityDto)
export class PokemonAbility extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pokemonAbilitiesId' })
  pokemonAbilitiesId: number;

  @Column({ nullable: true })
  pokemonId: number;
  @ManyToOne(() => PokemonEntities, (pokemon) => pokemon.pokemonId)
  @JoinColumn({
    name: 'pokemonId',
    referencedColumnName: 'pokemonId',
  })
  pokemon: PokemonEntities;

  @Column({ nullable: true })
  abilitiesId: number;
  @ManyToOne(() => AbilityEntities, (abilities) => abilities.abilitiesId)
  @JoinColumn({
    name: 'abilitiesId',
    referencedColumnName: 'abilitiesId',
  })
  abilities: AbilityEntities;
}

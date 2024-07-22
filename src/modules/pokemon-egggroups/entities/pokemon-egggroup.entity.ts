import { AbstractEntity } from 'src/common/abstract.entity';
import { UseDto } from 'src/decorators/use-dto.decorators';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokemonEgggroupDto } from '../dto/pokemon-egggroups.dto';
import { PokemonEntities } from 'src/modules/pokemon/entities/pokemon.entity';

@Entity('rel_pokemonEgggroup')
@UseDto(PokemonEgggroupDto)
export class PokemonEgggroupEntity extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  pokemonEgggroupid: number;

  @Column({ nullable: true })
  pokemonId: number;
  @ManyToOne(() => PokemonEntities, (pokemon) => pokemon.pokemonId)
  @JoinColumn({
    name: 'pokemonId',
    referencedColumnName: 'pokemonId',
  })
  pokemon: PokemonEntities;

  @Column({ nullable: true })
  eggGroupsId: number;
  @ManyToOne(() => PokemonEgggroupEntity, (eggGroup) => eggGroup.eggGroupsId)
  @JoinColumn({
    name: 'eggGroupsId',
    referencedColumnName: 'eggGroupsId',
  })
  eggGroups: PokemonEgggroupEntity;
}

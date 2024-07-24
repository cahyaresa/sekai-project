import { AbstractEntity } from 'src/common/abstract.entity';
import { PokemonTypeDto } from '../dto/pokemon-type.dto';
import { UseDto } from 'src/decorators/use-dto.decorators';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokemonEntities } from 'src/modules/pokemon/entities/pokemon.entity';
import { TypeEntities } from 'src/modules/type/entities/type.entity';

@Entity('rel_pokemonType')
@UseDto(PokemonTypeDto)
export class PokemonType extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pokemonTypeId' })
  pokemonTypeId: number;

  @Column({ nullable: true })
  pokemonId: number;
  @ManyToOne(() => PokemonEntities, (pokemon) => pokemon.pokemonId)
  @JoinColumn({
    name: 'pokemonId',
    referencedColumnName: 'pokemonId',
  })
  pokemon: PokemonEntities;

  @Column({ nullable: true })
  typeId: number;
  @ManyToOne(() => TypeEntities, (type) => type.typeId)
  @JoinColumn({
    name: 'typeId',
    referencedColumnName: 'typeId',
  })
  type: TypeEntities;
}

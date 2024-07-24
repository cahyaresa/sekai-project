import { AbstractEntity } from 'src/common/abstract.entity';
import { UseDto } from 'src/decorators/use-dto.decorators';
import { PokemonEntities } from 'src/modules/pokemon/entities/pokemon.entity';
import { SpeciesEntity } from 'src/modules/species/entities/species.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { PokemonSpecies } from '../dto/pokemon-specy.dto';

@Entity('rel_pokemonSpecies')
@UseDto(PokemonSpecies)
export class PokemonSpecy extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'pokemonSpeciesId' })
  pokemonSpeciesId: number;

  @Column({ nullable: true })
  pokemonId: number;
  @ManyToOne(() => PokemonEntities, (pokemon) => pokemon.pokemonId)
  @JoinColumn({
    name: 'pokemonId',
    referencedColumnName: 'pokemonId',
  })
  pokemon: PokemonEntities;

  @Column({ nullable: true })
  speciesId: number;
  @ManyToOne(() => SpeciesEntity, (species) => species.speciesId)
  @JoinColumn({
    name: 'speciesId',
    referencedColumnName: 'speciesId',
  })
  species: SpeciesEntity;
}

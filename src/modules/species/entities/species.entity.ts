import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SpeciesDto } from '../dto/species';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PokemonSpecy } from 'src/modules/pokemon-species/entities/pokemon-specy.entity';

@Entity('tbl_species')
@UseDto(SpeciesDto)
export class SpeciesEntity extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'speciesId' })
  speciesId: number;

  @Column({ type: 'varchar', name: 'species' })
  species: string;

  @OneToMany(
    () => PokemonSpecy,
    (pokemonSpecies) => pokemonSpecies.pokemonSpeciesId,
  )
  pokemonSpecies: PokemonSpecy[];
}

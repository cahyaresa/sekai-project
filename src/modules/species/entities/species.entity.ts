import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SpeciesDto } from '../dto/species';
import { AbstractEntity } from 'src/common/abstract.entity';

@Entity('tbl_species')
@UseDto(SpeciesDto)
export class SpeciesEntity extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'speciesId' })
  speciesId: number;

  @Column({ type: 'varchar', name: 'species' })
  species: string;
}

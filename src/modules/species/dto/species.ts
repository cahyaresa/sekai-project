import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SpeciesEntity } from '../entities/species.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export class SpeciesDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  readonly speciesId: number;

  @ApiProperty()
  @IsString()
  readonly species: string;

  constructor(Species: SpeciesEntity) {
    super(Species, { excludesFields: true });
    this.speciesId = Species.speciesId * 1;
    this.species = Species.species;
  }
}

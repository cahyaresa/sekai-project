import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AbilityEntities } from '../entities/ability.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export class AbilitiesDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  readonly abilitiesId: number;

  @ApiProperty()
  @IsString()
  readonly abilities: string;

  constructor(abilitiesEntity: AbilityEntities) {
    super(abilitiesEntity, { excludesFields: true });
    this.abilitiesId = abilitiesEntity.abilitiesId * 1;
    this.abilities = abilitiesEntity.abilities;
  }
}

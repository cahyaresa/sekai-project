import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { EggGroup } from '../entities/egg-group.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export class eggGroupsDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  readonly EggGroupsId: number;

  @ApiProperty()
  @IsString()
  readonly eggGrpups: string;

  constructor(eggGroupEntity: EggGroup) {
    super(eggGroupEntity, { excludesFields: true });
    this.EggGroupsId = eggGroupEntity.eggGroupsId * 1;
    this.eggGrpups = eggGroupEntity.eggGroups;
  }
}

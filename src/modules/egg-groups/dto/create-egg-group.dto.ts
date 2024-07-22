import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateEggGroupDto {
  @ApiProperty()
  @IsNumber()
  readonly EggGroupsId: number;

  @ApiProperty()
  @IsString()
  readonly eggGrpups: string;
}

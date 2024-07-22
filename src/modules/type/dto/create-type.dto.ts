import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTypeDto {
  @ApiProperty()
  @IsNumber()
  readonly typeId: number;

  @ApiProperty()
  @IsString()
  readonly type: string;
}

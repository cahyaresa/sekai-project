import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAbilityDto {
  @ApiProperty()
  @IsNumber()
  readonly abilitiesId: number;

  @ApiProperty()
  @IsString()
  readonly abilities: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AbstractDto } from 'src/common/abstract.dto';
import { TypeEntities } from '../entities/type.entity';

export class TypeDto extends AbstractDto {
  @ApiProperty()
  @IsNumber()
  readonly typeId: number;

  @ApiProperty()
  @IsString()
  readonly type: string;

  constructor(Type: TypeEntities) {
    super(Type, { excludesFields: true });
    this.typeId = Type.typeId * 1;
    this.type = Type.type;
  }
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractEntity } from './abstract.entity';

export class AbstractDto {
  @ApiPropertyOptional()
  createdBy?: string;

  @ApiPropertyOptional()
  updatedBy?: string;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  updatedDate: Date;

  constructor(entity: AbstractEntity, options?: { excludesFields?: boolean }) {
    if (!options?.excludesFields) {
      this.createdBy = entity.createdBy;
      this.updatedBy = entity.updatedBy;
      this.createdDate = entity.createdDate;
      this.updatedDate = entity.udpatedDate;
    }
  }
}

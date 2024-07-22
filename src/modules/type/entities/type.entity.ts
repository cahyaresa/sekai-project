import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TypeDto } from '../dto/type.dto';
import { AbstractEntity } from 'src/common/abstract.entity';

@Entity('tbl_type') //ambil dari nama table di db
@UseDto(TypeDto)
export class TypeEntities extends AbstractEntity {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'typeId' })
  typeId: number; // ambil dari nama kolom di db

  @Column({ type: 'varchar', name: 'type' })
  type: string;
}

import { UseDto } from 'src/decorators/use-dto.decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { eggGroupsDto } from '../dto/egg-group.dto';

@Entity('tbl_eggGrpups') //ambil dari nama table di db
@UseDto(eggGroupsDto)
export class EggGroup extends AbstractEntity<eggGroupsDto> {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'eggGroupsId' })
  eggGroupsId: number; // ambil dari nama kolom di db

  @Column({ type: 'varchar', name: 'eggGroups' })
  eggGroups: string;
}

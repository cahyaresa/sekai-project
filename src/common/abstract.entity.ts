import { Column } from 'typeorm';
import { AbstractDto } from './abstract.dto';
import { Constructor } from 'src/types';

export interface IAbstractEntity<DTO extends AbstractDto, o = never> {
  createdDate: Date;
  udpatedDate: Date;

  toDto(options?: o): DTO;
}

export abstract class AbstractEntity<
  DTO extends AbstractDto = AbstractDto,
  o = never,
> implements IAbstractEntity<DTO, o>
{
  @Column({ type: 'datetime', name: 'createdDate' })
  createdDate: Date;

  @Column({ type: 'datetime', name: 'updateDate' })
  udpatedDate: Date;

  @Column({ type: 'varchar', name: 'createdBy' })
  createdBy: string;

  @Column({ type: 'varchar', name: 'updatedBy' })
  updatedBy: string;

  private dtoClass?: Constructor<DTO, [AbstractEntity, o?]>;

  toDto(options?: o): DTO {
    const dtoClass = this.dtoClass;

    if (!dtoClass) {
      throw new Error(
        `You need to use @UseDto on class (${this.constructor.name}) be able to call toDto function`,
      );
    }

    return new dtoClass(this, options);
  }
}

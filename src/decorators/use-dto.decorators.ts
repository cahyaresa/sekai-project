import { Constructor } from 'src/types';
import { AbstractEntity } from '../common/abstract.entity';
import { AbstractDto } from 'src/common/abstract.dto';

export function UseDto(
  dtoClass: Constructor<AbstractDto, [AbstractEntity, unknown]>,
): ClassDecorator {
  return (ctor) => {
    ctor.prototype.dtoClass = dtoClass;
  };
}

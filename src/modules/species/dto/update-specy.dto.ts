import { PartialType } from '@nestjs/swagger';
import { CreateSpeciesDto } from './create-species.dto';

export class UpdateSpecyDto extends PartialType(CreateSpeciesDto) {}

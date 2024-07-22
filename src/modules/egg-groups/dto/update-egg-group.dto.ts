import { PartialType } from '@nestjs/swagger';
import { CreateEggGroupDto } from './create-egg-group.dto';

export class UpdateEggGroupDto extends PartialType(CreateEggGroupDto) {}

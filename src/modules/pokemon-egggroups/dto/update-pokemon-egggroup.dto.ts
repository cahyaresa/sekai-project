import { PartialType } from '@nestjs/swagger';
import { CreatePokemonEgggroupDto } from './create-pokemon-egggroup.dto';

export class UpdatePokemonEgggroupDto extends PartialType(CreatePokemonEgggroupDto) {}

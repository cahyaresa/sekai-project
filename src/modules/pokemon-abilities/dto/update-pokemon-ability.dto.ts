import { PartialType } from '@nestjs/swagger';
import { CreatePokemonAbilityDto } from './create-pokemon-ability.dto';

export class UpdatePokemonAbilityDto extends PartialType(
  CreatePokemonAbilityDto,
) {}

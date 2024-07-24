import { PartialType } from '@nestjs/swagger';
import { CreatePokemonSpecyDto } from './create-pokemon-specy.dto';

export class UpdatePokemonSpecyDto extends PartialType(CreatePokemonSpecyDto) {}

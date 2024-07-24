import {
  Controller,
  Get,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
// import { CreatePokemonAbilityDto } from './dto/create-pokemon-ability.dto';
// import { UpdatePokemonAbilityDto } from './dto/update-pokemon-ability.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AbilitiesDto } from './dto/ability';
import { AbilitiesService } from './abilities.service';

@Controller('abilities')
@ApiTags('Abilities')
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) {}

  // @Post()
  // create(@Body() createPokemonAbilityDto: CreatePokemonAbilityDto) {
  //   return this.pokemonAbilitiesService.create(createPokemonAbilityDto);
  // }

  @Get('/')
  findAll() {
    return this.abilitiesService.findAll();
  }

  @Get('/find-by-id')
  findOne(@Query('id') id: string) {
    return this.abilitiesService.findOne(+id);
  }

  @Get('/get-abilities-by-name')
  @ApiCreatedResponse({ type: AbilitiesDto })
  findByName(@Query('name') name: string) {
    return this.abilitiesService.getAbilitiesByName(name);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePokemonAbilityDto: UpdatePokemonAbilityDto,
  // ) {
  //   return this.pokemonAbilitiesService.update(+id, updatePokemonAbilityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pokemonAbilitiesService.remove(+id);
  // }
}

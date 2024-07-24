import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
// import { CreatePokemonEgggroupDto } from './dto/create-pokemon-egggroup.dto';
// import { UpdatePokemonEgggroupDto } from './dto/update-pokemon-egggroup.dto';

@Controller('pokemon-egggroups')
@ApiTags('pokemon-egggroups')
export class PokemonEgggroupsController {
  constructor(
    private readonly pokemonEgggroupsService: PokemonEgggroupsService,
  ) {}

  // @Post()
  // create(@Body() createPokemonEgggroupDto: CreatePokemonEgggroupDto) {
  //   return this.pokemonEgggroupsService.create(createPokemonEgggroupDto);
  // }

  @Get()
  @ApiQuery({
    name: 'egggroup',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'pokemon',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
  })
  findAll(
    @Query('egggroup') egggroup: string,
    @Query('pokemon') pokemon: string,
    @Query('limit') limit: number,
  ) {
    return this.pokemonEgggroupsService.findAll(egggroup, pokemon, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonEgggroupsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePokemonEgggroupDto: UpdatePokemonEgggroupDto) {
  //   return this.pokemonEgggroupsService.update(+id, updatePokemonEgggroupDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pokemonEgggroupsService.remove(+id);
  // }
}

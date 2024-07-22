import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';
import { CreatePokemonEgggroupDto } from './dto/create-pokemon-egggroup.dto';
import { UpdatePokemonEgggroupDto } from './dto/update-pokemon-egggroup.dto';

@Controller('pokemon-egggroups')
export class PokemonEgggroupsController {
  constructor(private readonly pokemonEgggroupsService: PokemonEgggroupsService) {}

  @Post()
  create(@Body() createPokemonEgggroupDto: CreatePokemonEgggroupDto) {
    return this.pokemonEgggroupsService.create(createPokemonEgggroupDto);
  }

  @Get()
  findAll() {
    return this.pokemonEgggroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonEgggroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonEgggroupDto: UpdatePokemonEgggroupDto) {
    return this.pokemonEgggroupsService.update(+id, updatePokemonEgggroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonEgggroupsService.remove(+id);
  }
}

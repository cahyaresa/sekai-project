import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { PokemonSpeciesService } from './pokemon-species.service';

@Controller('pokemon-species')
@ApiTags('pokemon-species')
export class PokemonSpeciesController {
  constructor(private readonly pokemonSpeciesService: PokemonSpeciesService) {}

  @ApiQuery({
    name: 'species',
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
  @Get('/')
  findAll(
    @Query('species') species: string,
    @Query('pokemon') pokemon: string,
    @Query('limit') limit: number,
  ) {
    return this.pokemonSpeciesService.findAll(species, pokemon, limit);
  }
}

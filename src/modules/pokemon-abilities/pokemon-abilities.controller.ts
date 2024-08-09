import { Controller, Get, Query } from '@nestjs/common';
import { PokemonAbilitiesService } from './pokemon-abilities.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pokemon-abilities')
@ApiTags('pokemon-abilities')
export class PokemonAbilitiesController {
  constructor(
    private readonly pokemonAbilitiesService: PokemonAbilitiesService,
  ) {}

  @ApiQuery({
    name: 'ability',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'pokemon',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'pokemonId',
    required: false,
    type: Number,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
  })
  @Get('/')
  findAll(
    @Query('ability') ability: string,
    @Query('pokemon') pokemon: string,
    @Query('pokemonId') pokemonId: number,
    @Query('limit') limit: number,
  ) {
    return this.pokemonAbilitiesService.findAll(
      ability,
      pokemon,
      pokemonId,
      limit,
    );
  }
}

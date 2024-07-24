import { Controller, Get, Query } from '@nestjs/common';
import { PokemonTypeService } from './pokemon-type.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('pokemon-type')
@ApiTags('pokemon-type')
export class PokemonTypeController {
  constructor(private readonly pokemonTypeService: PokemonTypeService) {}

  @ApiQuery({
    name: 'type',
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
    @Query('type') type: string,
    @Query('pokemon') pokemon: string,
    @Query('limit') limit: number,
  ) {
    return this.pokemonTypeService.findAll(type, pokemon, limit);
  }
}

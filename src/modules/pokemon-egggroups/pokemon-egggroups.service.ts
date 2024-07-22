import { Injectable } from '@nestjs/common';
import { CreatePokemonEgggroupDto } from './dto/create-pokemon-egggroup.dto';
import { UpdatePokemonEgggroupDto } from './dto/update-pokemon-egggroup.dto';

@Injectable()
export class PokemonEgggroupsService {
  create(createPokemonEgggroupDto: CreatePokemonEgggroupDto) {
    return 'This action adds a new pokemonEgggroup';
  }

  findAll() {
    return `This action returns all pokemonEgggroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonEgggroup`;
  }

  update(id: number, updatePokemonEgggroupDto: UpdatePokemonEgggroupDto) {
    return `This action updates a #${id} pokemonEgggroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemonEgggroup`;
  }
}

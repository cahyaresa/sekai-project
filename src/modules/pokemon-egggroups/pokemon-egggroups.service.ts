import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEgggroupEntity } from './entities/pokemon-egggroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonEgggroupsService {
  constructor(
    @InjectRepository(PokemonEgggroupEntity)
    private pokemonEgggroupRepository: Repository<PokemonEgggroupEntity>,
  ) {}
  // create(createPokemonEgggroupDto: CreatePokemonEgggroupDto) {
  //   return 'This action adds a new pokemonEgggroup';
  // }

  async findAll(
    egggroup: string,
    pokemon: string,
    limit: number,
  ): Promise<{
    data: PokemonEgggroupEntity[];
    itemCount: number;
  }> {
    let query = this.pokemonEgggroupRepository
      .createQueryBuilder('pokemonEgggroup')
      .leftJoin('pokemonEgggroup.pokemon', 'pokemon')
      .leftJoin('pokemonEgggroup.eggGroup', 'eggGroup')
      .select([
        'pokemonEgggroup.pokemonEgggroupid',
        'pokemon.name',
        'eggGroup.eggGroups',
      ]);

    if (egggroup && pokemon) {
      query = query.where('eggGroup.eggGroups = :egggroup', { egggroup });
      query = query.andWhere('pokemon.name = :pokemon', { pokemon });
    }
    if (egggroup) {
      query = query.where('eggGroup.eggGroups = :egggroup', { egggroup });
    }

    if (pokemon) {
      query = query.where('pokemon.name = :pokemon', { pokemon });
    }

    query.limit(limit ? limit : 10);
    const [data, itemCount] = await Promise.all([
      query.getMany(),
      query.getCount(),
    ]);

    return {
      data,
      itemCount,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonEgggroup`;
  }

  // update(id: number, updatePokemonEgggroupDto: UpdatePokemonEgggroupDto) {
  //   return `This action updates a #${id} pokemonEgggroup`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pokemonEgggroup`;
  // }
}

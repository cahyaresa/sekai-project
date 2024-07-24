import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonSpecy } from './entities/pokemon-specy.entity';

@Injectable()
export class PokemonSpeciesService {
  constructor(
    @InjectRepository(PokemonSpecy)
    private pokemonSpecyRepository: Repository<PokemonSpecy>,
  ) {}
  async findAll(
    species: string,
    pokemon: string,
    limit: number,
  ): Promise<{
    data: PokemonSpecy[];
    itemCount: number;
  }> {
    let query = this.pokemonSpecyRepository
      .createQueryBuilder('pokemonSpecies')
      .leftJoin('pokemonSpecies.pokemon', 'pokemon')
      .leftJoin('pokemonSpecies.species', 'species')
      .select([
        'pokemonSpecies.pokemonSpeciesid',
        'pokemon.name',
        'species.species',
      ]);

    if (species && pokemon) {
      query = query.where('LOWER(species.species) like :species', {
        species: `%${species.toLowerCase()}%`,
      });
      query = query.andWhere('LOWER(pokemon.name) like :pokemon', {
        pokemon: `%${pokemon.toLowerCase()}%`,
      });
    }
    if (species) {
      query = query.where('LOWER(species.species) like :species', {
        species: `%${species.toLowerCase()}%`,
      });
    }

    if (pokemon) {
      query = query.andWhere('LOWER(pokemon.name) like :pokemon', {
        pokemon: `%${pokemon.toLowerCase()}%`,
      });
    }

    query.limit(limit ? limit : 10);
    const [data, itemCount] = await Promise.all([
      query.getRawMany(),
      query.getCount(),
    ]);

    return {
      data,
      itemCount,
    };
  }
}

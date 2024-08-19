import { Injectable } from '@nestjs/common';
import { PokemonType } from './entities/pokemon-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonTypeService {
  constructor(
    @InjectRepository(PokemonType)
    private pokemonSpecyRepository: Repository<PokemonType>,
  ) {}
  async findAll(
    type: string,
    pokemon: string,
    limit: number,
  ): Promise<{
    data: PokemonType[];
    itemCount: number;
  }> {
    let page = 1; //need change
    let query = this.pokemonSpecyRepository
      .createQueryBuilder('pokemonType')
      .leftJoin('pokemonType.pokemon', 'pokemon')
      .leftJoin('pokemonType.type', 'type')
      .select(['pokemonType.pokemonTypeid', 'pokemon.name', 'type.type']);

    if (type && pokemon) {
      query = query.where('LOWER(type.type) like :type', {
        type: `%${type.toLowerCase()}%`,
      });
      query = query.andWhere('LOWER(pokemon.name) like :pokemon', {
        pokemon: `%${pokemon.toLowerCase()}%`,
      });
    }
    if (type) {
      query = query.where('LOWER(type.type) like :type', {
        type: `%${type.toLowerCase()}%`,
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

    const pageCount = Math.ceil(itemCount / limit);
    const hasPreviousPage = page > 1;
    const hasNextPage = page < pageCount;

    return {
      data,
      itemCount,
    };
  }
}

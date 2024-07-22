import { Injectable } from '@nestjs/common';
import { PokemonEntities } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntities)
    private pokemonRepository: Repository<PokemonEntities>,
  ) {}

  getPokemonByType() {
    return 'pokemon';
  }

  async findAll(): Promise<{
    data: PokemonEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.pokemonRepository
        .createQueryBuilder('pokemon')
        .leftJoin('pokemon.type1id', 'type')
        .select(['pokemon.name']);

      const [data, itemCount] = await Promise.all([
        query.orderBy('pokemon.name', 'ASC').getMany(),
        query.getCount(),
      ]);
      return { data, itemCount };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

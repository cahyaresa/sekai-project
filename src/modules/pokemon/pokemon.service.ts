import { Injectable } from '@nestjs/common';
import { PokemonEntities } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { of } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonEntities)
    private pokemonRepository: Repository<PokemonEntities>,
  ) {}

  getPokemonByType() {
    return 'pokemon';
  }

  async findAll(
    page: number,
    limit: number,
  ): Promise<{
    data: PokemonEntities[];
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }> {
    try {
      const offset = (page - 1) * limit;

      let query = this.pokemonRepository
        .createQueryBuilder('pokemon')
        .select([
          'pokemon.pokemonId',
          'pokemon.name',
          'pokemon.pokedex',
          'pokemon.sprite',
        ]);

      const [data, itemCount] = await Promise.all([
        query
          .orderBy('pokemon.pokemonId', 'ASC')
          .limit(limit ? limit : 10)
          .offset(offset)
          .getRawMany(),
        query.getCount(),
      ]);

      console.log(page);

      const pageCount = Math.ceil(itemCount / limit);
      const hasPreviousPage = page > 1;
      const hasNextPage = page < pageCount;

      return {
        data,
        itemCount,
        pageCount,
        hasPreviousPage,
        hasNextPage,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async findOne(id: number) {
    try {
      const query = await this.pokemonRepository
        .createQueryBuilder('pokemon')
        .select([
          'pokemon.pokemonId',
          'pokemon.name',
          'pokemon.pokedex',
          'pokemon.height',
          'pokemon.weight',
          'pokemon.evYield',
          'pokemon.catchRate',
          'pokemon.baseFriendship',
          'pokemon.baseExp',
          'pokemon.growthRate',
          'pokemon.gender',
          'pokemon.eggCycles',
          'pokemon.hpBase',
          'pokemon.attackBase',
          'pokemon.attackMin',
          'pokemon.attackMax',
          'pokemon.defenseBase',
          'pokemon.defenseMin',
          'pokemon.defenseMax',
          'pokemon.specialAttackBase',
          'pokemon.specialAttackMin',
          'pokemon.specialAttackMax',
          'pokemon.specialDefenseBase',
          'pokemon.specialDefenseMin',
          'pokemon.specialDefenseMax',
          'pokemon.speedBase',
          'pokemon.speedMin',
          'pokemon.speedMax',
          'pokemon.sprite',
        ])
        .where('pokemon.pokemonId = :id', { id })
        .getRawOne();

      return query;
    } catch (err) {
      throw err;
    }
  }

  async getPokemonByName(name: string): Promise<{
    data: PokemonEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.pokemonRepository
        .createQueryBuilder('pokemon')
        .select([
          'pokemon.pokemonId',
          'pokemon.name',
          'pokemon.pokedex',
          'pokemon.sprite',
          'pokemon.createdBy',
          'pokemon.updatedBy',
          'pokemon.createdDate',
          'pokemon.updatedDate',
        ])
        .where('LOWER(pokemon.name) like :name', {
          name: `%${name.toLocaleLowerCase()}%`,
        });
      const [data, itemCount] = await Promise.all([
        query.getMany(),
        query.getCount(),
      ]);

      return { data, itemCount };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

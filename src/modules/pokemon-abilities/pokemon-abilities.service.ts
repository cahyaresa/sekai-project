import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonAbility } from './entities/pokemon-ability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonAbilitiesService {
  constructor(
    @InjectRepository(PokemonAbility)
    private pokemonAbilityRepository: Repository<PokemonAbility>,
  ) {}
  async findAll(
    ability: string,
    pokemon: string,
    limit: number,
  ): Promise<{
    data: PokemonAbility[];
    itemCount: number;
  }> {
    let query = this.pokemonAbilityRepository
      .createQueryBuilder('pokemonAbilities')
      .leftJoin('pokemonAbilities.pokemon', 'pokemon')
      .leftJoin('pokemonAbilities.abilities', 'ability')
      .select([
        'pokemonAbilities.pokemonAbilitiesid',
        'pokemon.name',
        'ability.abilities',
      ]);

    if (ability && pokemon) {
      query = query.where('LOWER(ability.abilities) like :ability', {
        ability: `%${ability.toLowerCase()}%`,
      });
      query = query.andWhere('LOWER(pokemon.name) like :pokemon', {
        pokemon: `%${pokemon.toLocaleLowerCase()}%`,
      });
    }
    if (ability) {
      query = query.where('LOWER(ability.abilities) like :ability', {
        ability: `%${ability.toLowerCase()}%`,
      });
    }

    if (pokemon) {
      query = query.andWhere('LOWER(pokemon.name) like :pokemon', {
        pokemon: `%${pokemon.toLocaleLowerCase()}%`,
      });
    }

    query.limit(limit ? limit : 10);
    const [data, itemCount] = await Promise.all([
      query.getRawMany(),
      query.getCount(),
    ]);

    console.log(data);

    return {
      data,
      itemCount,
    };
  }
}

import { Injectable } from '@nestjs/common';
// import { CreateAbilityDto } from './dto/create--ability.dto';
// import { UpdateAbilityDto } from './dto/update--ability.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbilityEntities } from './entities/ability.entity';

@Injectable()
export class AbilitiesService {
  constructor(
    @InjectRepository(AbilityEntities)
    private abilitiesRepository: Repository<AbilityEntities>,
  ) {}

  async findAll(): Promise<{
    data: AbilityEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.abilitiesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.abilitiesId', 'pokemon.abilities']);

      const [data, itemCount] = await Promise.all([
        query.orderBy('eggGroups.abilitiesId', 'ASC').getMany(),
        query.getCount(),
      ]);
      return { data, itemCount };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async findOne(id: number) {
    try {
      const query = await this.abilitiesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.abilitiesId', 'pokemon.abilities'])
        .where('pokemon.abilitiesId = :id', { id })
        .getRawOne();

      return query;
    } catch (err) {
      throw err;
    }
  }

  async getAbilitiesByName(name: string): Promise<{
    data: AbilityEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.abilitiesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.abilitiesId', 'pokemon.abilities'])
        .where('LOWER(pokemon.abilities) like :name', {
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
  // create(createPokemonAbilityDto: CreatePokemonAbilityDto) {
  //   return 'This action adds a new pokemonAbility';
  // }

  // findAll() {
  //   return `This action returns all pokemonAbilities`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} pokemonAbility`;
  // }

  // update(id: number, updatePokemonAbilityDto: UpdatePokemonAbilityDto) {
  //   return `This action updates a #${id} pokemonAbility`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pokemonAbility`;
  // }
}

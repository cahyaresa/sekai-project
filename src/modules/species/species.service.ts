import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpeciesEntity } from './entities/species.entity';
import { Repository } from 'typeorm';
// import { CreateSpecyDto } from './dto/create-pokemon-specy.dto';
// import { UpdateSpecyDto } from './dto/update-pokemon-specy.dto';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(SpeciesEntity)
    private speciesRepository: Repository<SpeciesEntity>,
  ) {}

  // create(createSpecyDto: CreateSpecyDto) {
  //   return 'This action adds a new specy';
  // }

  async findAll(): Promise<{
    data: SpeciesEntity[];
    itemCount: number;
  }> {
    try {
      const query = this.speciesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.speciesId', 'pokemon.species']);

      const [data, itemCount] = await Promise.all([
        query.orderBy('eggGroups.eggGroupsId', 'ASC').getMany(),
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
      const query = await this.speciesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.speciesId', 'pokemon.species'])
        .where('pokemon.speciesId = :id', { id })
        .getRawOne();

      return query;
    } catch (err) {
      throw err;
    }
  }

  async getSpeciesByName(name: string): Promise<{
    data: SpeciesEntity[];
    itemCount: number;
  }> {
    try {
      const query = this.speciesRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.speciesId', 'pokemon.species'])
        .where('LOWER(pokemon.species) like :name', {
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

  // update(id: number, updateSpecyDto: UpdateSpecyDto) {
  //   return `This action updates a #${id} specy`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} specy`;
  // }
}

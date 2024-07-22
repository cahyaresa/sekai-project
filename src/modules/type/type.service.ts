import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeEntities } from './entities/type.entity';
// import { CreateTypeDto } from './dto/create-pokemon-type.dto';
// import { UpdateTypeDto } from './dto/update-pokemon-type.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(TypeEntities)
    private typeRepository: Repository<TypeEntities>,
  ) {}

  // create(createTypeDto: CreateTypeDto) {
  //   return 'This action adds a new type';
  // }

  async findAll(): Promise<{
    data: TypeEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.typeRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.typeId', 'pokemon.type']);

      const [data, itemCount] = await Promise.all([
        query.orderBy('pokemon.typeId', 'ASC').getMany(),
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
      const query = await this.typeRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.typeId', 'pokemon.type'])
        .where('pokemon.typeId = :id', { id })
        .getRawOne();

      return query;
    } catch (err) {
      throw err;
    }
  }

  async getTypeByName(name: string): Promise<{
    data: TypeEntities[];
    itemCount: number;
  }> {
    try {
      const query = this.typeRepository
        .createQueryBuilder('pokemon')
        .select(['pokemon.typeId', 'pokemon.type'])
        .where('LOWER(pokemon.type) like :name', {
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

  // update(id: number, updateTypeDto: UpdateTypeDto) {
  //   return `This action updates a #${id} type`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} type`;
  // }
}

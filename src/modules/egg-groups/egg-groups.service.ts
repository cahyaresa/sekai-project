import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EggGroup } from './entities/egg-group.entity';
import { Repository } from 'typeorm';
// import { CreateEggGroupDto } from './dto/create-egg-group.dto';
// import { UpdateEggGroupDto } from './dto/update-egg-group.dto';

@Injectable()
export class EggGroupsService {
  constructor(
    @InjectRepository(EggGroup)
    private eggGroupRepository: Repository<EggGroup>,
  ) {}

  // create(createEggGroupDto: CreateEggGroupDto) {
  //   return 'This action adds a new eggGroup';
  // }

  async findAll(): Promise<{
    data: EggGroup[];
    itemCount: number;
  }> {
    try {
      const query = this.eggGroupRepository
        .createQueryBuilder('eggGroups')
        .select(['eggGroups.eggGroupsId', 'eggGroups.eggGroups']);

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
      const query = await this.eggGroupRepository
        .createQueryBuilder('egg')
        .select(['egg.eggGroupsId', 'egg.eggGroups'])
        .where('egg.eggGroupsId = :id', { id })
        .getRawOne();

      return query;
    } catch (err) {
      throw err;
    }
  }

  async getEggGroupsByName(name: string): Promise<{
    data: EggGroup[];
    itemCount: number;
  }> {
    try {
      const query = this.eggGroupRepository
        .createQueryBuilder('egg')
        .select(['egg.eggGroupsId', 'egg.eggGroups'])
        .where('LOWER(egg.eggGroups) like :name', {
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

  // update(id: number, updateEggGroupDto: UpdateEggGroupDto) {
  //   return `This action updates a #${id} eggGroup`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} eggGroup`;
  // }
}

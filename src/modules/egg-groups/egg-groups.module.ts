import { Module } from '@nestjs/common';
import { EggGroupsService } from './egg-groups.service';
import { EggGroupsController } from './egg-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EggGroup } from './entities/egg-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EggGroup])],
  controllers: [EggGroupsController],
  providers: [EggGroupsService],
})
export class EggGroupsModule {}

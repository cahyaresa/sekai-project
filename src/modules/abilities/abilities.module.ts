import { Module } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';
import { AbilitiesController } from './abilities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityEntities } from './entities/ability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbilityEntities])],
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
})
export class AbilitiesModule {}

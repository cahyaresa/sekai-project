import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeciesEntity } from './entities/species.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpeciesEntity])],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}

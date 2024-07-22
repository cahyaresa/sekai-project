import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntities } from './entities/type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntities])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}

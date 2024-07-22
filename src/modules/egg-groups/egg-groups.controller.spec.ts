import { Test, TestingModule } from '@nestjs/testing';
import { EggGroupsController } from './egg-groups.controller';
import { EggGroupsService } from './egg-groups.service';

describe('EggGroupsController', () => {
  let controller: EggGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EggGroupsController],
      providers: [EggGroupsService],
    }).compile();

    controller = module.get<EggGroupsController>(EggGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

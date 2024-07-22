import { Test, TestingModule } from '@nestjs/testing';
import { EggGroupsService } from './egg-groups.service';

describe('EggGroupsService', () => {
  let service: EggGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EggGroupsService],
    }).compile();

    service = module.get<EggGroupsService>(EggGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

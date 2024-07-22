import { Test, TestingModule } from '@nestjs/testing';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';

describe('PokemonEgggroupsService', () => {
  let service: PokemonEgggroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonEgggroupsService],
    }).compile();

    service = module.get<PokemonEgggroupsService>(PokemonEgggroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

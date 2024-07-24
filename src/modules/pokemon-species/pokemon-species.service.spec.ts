import { Test, TestingModule } from '@nestjs/testing';
import { PokemonSpeciesService } from './pokemon-species.service';

describe('PokemonSpeciesService', () => {
  let service: PokemonSpeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonSpeciesService],
    }).compile();

    service = module.get<PokemonSpeciesService>(PokemonSpeciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

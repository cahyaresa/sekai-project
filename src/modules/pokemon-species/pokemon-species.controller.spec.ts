import { Test, TestingModule } from '@nestjs/testing';
import { PokemonSpeciesController } from './pokemon-species.controller';
import { PokemonSpeciesService } from './pokemon-species.service';

describe('PokemonSpeciesController', () => {
  let controller: PokemonSpeciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonSpeciesController],
      providers: [PokemonSpeciesService],
    }).compile();

    controller = module.get<PokemonSpeciesController>(PokemonSpeciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

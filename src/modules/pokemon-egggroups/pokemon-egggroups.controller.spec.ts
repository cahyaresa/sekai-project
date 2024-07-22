import { Test, TestingModule } from '@nestjs/testing';
import { PokemonEgggroupsController } from './pokemon-egggroups.controller';
import { PokemonEgggroupsService } from './pokemon-egggroups.service';

describe('PokemonEgggroupsController', () => {
  let controller: PokemonEgggroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonEgggroupsController],
      providers: [PokemonEgggroupsService],
    }).compile();

    controller = module.get<PokemonEgggroupsController>(PokemonEgggroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

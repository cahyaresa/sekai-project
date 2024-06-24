import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
// import * as httpmocks from 'node-mocks-http';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be calls say hello', async () => {
    const sayHello = await controller.sayNamePokemon('charizard', 'fire');
    expect(sayHello).toBe('hello charizard, fire');
  });

  // it('should be calles say hello 2', async () => {
  //   const response = httpmocks.createResponse();

  //   controller.
  //   expect(sayHello).toBe('hello charizard, fire');
  // });
});

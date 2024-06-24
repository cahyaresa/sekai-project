import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  getPokemonByType() {
    return 'pokemon';
  }
}

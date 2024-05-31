import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

@Controller('/api/pokemon')
@ApiTags('pokemon')
export class PokemonController {
  @Get('/data/:name')
  getPokemonByIdwithExpressRequest(
    @Req() req: Request,
    @Res() res: Response,
  ): Response {
    return res.status(200).send(`ada ${req.params.name}`);
  }

  @Get('/sayHello')
  sayNamePokemon(
    @Query('name') name: string,
    @Query('type') type: string,
  ): string {
    return `hello ${name}, ${type}`;
  }
}

import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { PokemonService } from './pokemon.service';

interface ResponseJson {
  data: string;
  size: string;
}

@Controller('/api/pokemon')
@ApiTags('pokemon')
export class PokemonController {
  constructor(private service: PokemonService) {}

  // tutorial
  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('success set cookie');
  }

  @Get('get-cookie')
  getCookie(@Req() request: Request) {
    return request.cookies.name;
  }
  @Get('/data/:name')
  getPokemonByIdwithExpressRequest(
    @Req() req: Request,
    @Res() res: Response,
  ): Response {
    return res.status(200).send(`ada ${req.params.name}`);
  }

  @Get('/sample-json')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async getResponseJson(): Promise<ResponseJson> {
    return {
      data: 'ini data',
      size: 'banyak',
    };
  }

  @Get('redirect-to-sample-json')
  @Redirect()
  redirectResponse(): HttpRedirectResponse {
    return {
      url: '/api/pokemon/sample-json',
      statusCode: 302,
    };
  }

  @Get('/sayHello')
  sayNamePokemon(
    @Query('name') name: string,
    @Query('type') type: string,
  ): string {
    return `hello ${name}, ${type}`;
  }

  @Get('/get-all')
  getAll() {
    return this.service.findAll();
  }
}

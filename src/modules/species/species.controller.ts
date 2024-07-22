import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
  Query,
} from '@nestjs/common';
// import { CreateSpecyDto } from './dto/create--specy.dto';
// import { UpdateSpecyDto } from './dto/update--specy.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SpeciesDto } from './dto/species';
import { SpeciesService } from './species.service';

@Controller('-species')
@ApiTags(' Species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  // @Post()
  // create(@Body() createSpecyDto: CreateSpecyDto) {
  //   return this.speciesService.create(createSpecyDto);
  // }

  @Get('/')
  findAll() {
    return this.speciesService.findAll();
  }

  @Get('/find-by-id')
  findOne(@Query('id') id: string) {
    return this.speciesService.findOne(+id);
  }

  @Get('/get-eggGroups-by-name')
  @ApiCreatedResponse({ type: SpeciesDto })
  findByName(@Query('name') name: string) {
    return this.speciesService.getSpeciesByName(name);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSpecyDto: UpdateSpecyDto,
  // ) {
  //   return this.SpeciesService.update(+id, updateSpecyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.SpeciesService.remove(+id);
  // }
}

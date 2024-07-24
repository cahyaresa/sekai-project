import { Controller, Get, Query } from '@nestjs/common';
import { TypeService } from './type.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('type')
@ApiTags('Type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  // @Post()
  // create(@Body() createTypeDto: CreateTypeDto) {
  //   return this.TypeService.create(createTypeDto);
  // }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get('/find-by-id')
  findOne(@Query('id') id: string) {
    return this.typeService.findOne(+id);
  }

  @Get('/find-by-name')
  findByName(@Query('name') name: string) {
    return this.typeService.getTypeByName(name);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTypeDto: UpdateTypeDto,
  // ) {
  //   return this.TypeService.update(+id, updateTypeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.TypeService.remove(+id);
  // }
}

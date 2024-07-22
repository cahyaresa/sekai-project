import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Query,
  // Delete,
} from '@nestjs/common';
import { EggGroupsService } from './egg-groups.service';
// import { CreateEggGroupDto } from './dto/create-egg-group.dto';
// import { UpdateEggGroupDto } from './dto/update-egg-group.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { eggGroupsDto } from './dto/egg-group.dto';

@Controller('egg-groups')
@ApiTags('egg-groups')
export class EggGroupsController {
  constructor(private readonly eggGroupsService: EggGroupsService) {}

  // @Post()
  // create(@Body() createEggGroupDto: CreateEggGroupDto) {
  //   return this.eggGroupsService.create(createEggGroupDto);
  // }

  @Get('/')
  findAll() {
    return this.eggGroupsService.findAll();
  }

  @Get('/find-by-id')
  findOne(@Query('id') id: string) {
    return this.eggGroupsService.findOne(+id);
  }

  @Get('/get-eggGroups-by-name')
  @ApiCreatedResponse({ type: eggGroupsDto })
  findByName(@Query('name') name: string) {
    return this.eggGroupsService.getEggGroupsByName(name);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateEggGroupDto: UpdateEggGroupDto,
  // ) {
  //   return this.eggGroupsService.update(+id, updateEggGroupDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.eggGroupsService.remove(+id);
  // }
}

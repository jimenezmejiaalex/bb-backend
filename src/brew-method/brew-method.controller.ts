import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrewMethodService } from './brew-method.service';
import { CreateBrewMethodDto } from './dto/create-brew-method.dto';
import { UpdateBrewMethodDto } from './dto/update-brew-method.dto';

@Controller('brew-method')
export class BrewMethodController {
  constructor(private readonly brewMethodService: BrewMethodService) {}

  @Post()
  create(@Body() createBrewMethodDto: CreateBrewMethodDto) {
    return this.brewMethodService.create(createBrewMethodDto);
  }

  @Get()
  findAll() {
    return this.brewMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brewMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrewMethodDto: UpdateBrewMethodDto) {
    return this.brewMethodService.update(+id, updateBrewMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brewMethodService.remove(+id);
  }
}

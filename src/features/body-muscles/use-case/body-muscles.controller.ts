import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BodyMusclesService } from './body-muscles.service';
import { CreateBodyMuscleDto } from '../domain/dto/create-body-muscle.dto';
import { UpdateBodyMuscleDto } from '../domain/dto/update-body-muscle.dto';

@Controller('body-muscles')
export class BodyMusclesController {
  constructor(private readonly bodyMusclesService: BodyMusclesService) {}

  @Post()
  create(@Body() createBodyMuscleDto: CreateBodyMuscleDto) {
    return this.bodyMusclesService.create(createBodyMuscleDto);
  }

  @Get()
  findAll() {
    return this.bodyMusclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyMusclesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBodyMuscleDto: UpdateBodyMuscleDto,
  ) {
    return this.bodyMusclesService.update(+id, updateBodyMuscleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyMusclesService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuperUserService } from './super-user.service';
import { CreateSuperUserDto } from '../domain/dto/create-super-user.dto';
import { UpdateSuperUserDto } from '../domain/dto/update-super-user.dto';

@Controller('super-user')
export class SuperUserController {
  constructor(private readonly superUserService: SuperUserService) {}

  @Post()
  create(@Body() createSuperUserDto: CreateSuperUserDto) {
    return this.superUserService.create(createSuperUserDto);
  }

  @Get()
  findAll() {
    return this.superUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSuperUserDto: UpdateSuperUserDto,
  ) {
    return this.superUserService.update(+id, updateSuperUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superUserService.remove(+id);
  }
}

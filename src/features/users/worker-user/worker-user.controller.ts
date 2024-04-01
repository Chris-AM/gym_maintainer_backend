import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerUserService } from './worker-user.service';
import { CreateWorkerUserDto } from './dto/create-worker-user.dto';
import { UpdateWorkerUserDto } from './dto/update-worker-user.dto';

@Controller('worker-user')
export class WorkerUserController {
  constructor(private readonly workerUserService: WorkerUserService) {}

  @Post()
  create(@Body() createWorkerUserDto: CreateWorkerUserDto) {
    return this.workerUserService.create(createWorkerUserDto);
  }

  @Get()
  findAll() {
    return this.workerUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerUserDto: UpdateWorkerUserDto) {
    return this.workerUserService.update(+id, updateWorkerUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerUserService.remove(+id);
  }
}

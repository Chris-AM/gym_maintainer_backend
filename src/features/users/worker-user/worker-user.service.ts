import { Injectable } from '@nestjs/common';
import { CreateWorkerUserDto } from './dto/create-worker-user.dto';
import { UpdateWorkerUserDto } from './dto/update-worker-user.dto';

@Injectable()
export class WorkerUserService {
  create(createWorkerUserDto: CreateWorkerUserDto) {
    return 'This action adds a new workerUser';
  }

  findAll() {
    return `This action returns all workerUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workerUser`;
  }

  update(id: number, updateWorkerUserDto: UpdateWorkerUserDto) {
    return `This action updates a #${id} workerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} workerUser`;
  }
}

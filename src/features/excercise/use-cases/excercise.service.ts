import { Injectable } from '@nestjs/common';
import { CreateExcerciseDto } from '../domain/dto/create-excercise.dto';
import { UpdateExcerciseDto } from '../domain/dto/update-excercise.dto';

@Injectable()
export class ExcerciseService {
  create(createExcerciseDto: CreateExcerciseDto) {
    return 'This action adds a new excercise';
  }

  findAll() {
    return `This action returns all excercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excercise`;
  }

  update(id: number, updateExcerciseDto: UpdateExcerciseDto) {
    return `This action updates a #${id} excercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} excercise`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from '../domain/dto/create-exercise.dto';
import { UpdateExerciseDto } from '../domain/dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  create(createExerciseDto: CreateExerciseDto) {
    return `This action adds a new exercise at ${createExerciseDto}`;
  }

  findAll() {
    return `This action returns all exercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id}, ${updateExerciseDto} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}

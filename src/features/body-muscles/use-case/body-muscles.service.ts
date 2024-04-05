import { Injectable } from '@nestjs/common';
import { CreateBodyMuscleDto } from '../domain/dto/create-body-muscle.dto';
import { UpdateBodyMuscleDto } from '../domain/dto/update-body-muscle.dto';

@Injectable()
export class BodyMusclesService {
  create(createBodyMuscleDto: CreateBodyMuscleDto) {
    return `This action adds a new bodyMuscle at ${createBodyMuscleDto}`;
  }

  findAll() {
    return `This action returns all bodyMuscles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bodyMuscle`;
  }

  update(id: number, updateBodyMuscleDto: UpdateBodyMuscleDto) {
    return `This action updates a #${id}, ${updateBodyMuscleDto} bodyMuscle`;
  }

  remove(id: number) {
    return `This action removes a #${id} bodyMuscle`;
  }
}

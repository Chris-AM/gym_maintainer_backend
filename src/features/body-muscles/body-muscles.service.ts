import { Injectable } from '@nestjs/common';
import { CreateBodyMuscleDto } from './dto/create-body-muscle.dto';
import { UpdateBodyMuscleDto } from './dto/update-body-muscle.dto';

@Injectable()
export class BodyMusclesService {
  create(createBodyMuscleDto: CreateBodyMuscleDto) {
    return 'This action adds a new bodyMuscle';
  }

  findAll() {
    return `This action returns all bodyMuscles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bodyMuscle`;
  }

  update(id: number, updateBodyMuscleDto: UpdateBodyMuscleDto) {
    return `This action updates a #${id} bodyMuscle`;
  }

  remove(id: number) {
    return `This action removes a #${id} bodyMuscle`;
  }
}

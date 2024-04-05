import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from '../domain/dto/create-coach.dto';
import { UpdateCoachDto } from '../domain/dto/update-coach.dto';

@Injectable()
export class CoachService {
  create(createCoachDto: CreateCoachDto) {
    return `This action adds a new coach at ${createCoachDto}`;
  }

  findAll() {
    return `This action returns all coach`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coach`;
  }

  update(id: number, updateCoachDto: UpdateCoachDto) {
    return `This action updates a #${id}, ${updateCoachDto} coach`;
  }

  remove(id: number) {
    return `This action removes a #${id} coach`;
  }
}

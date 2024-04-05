import { Injectable } from '@nestjs/common';
import { CreateSuperUserDto } from '../domain/dto/create-super-user.dto';
import { UpdateSuperUserDto } from '../domain/dto/update-super-user.dto';

@Injectable()
export class SuperUserService {
  create(createSuperUserDto: CreateSuperUserDto) {
    return `This action adds a new superUser at ${createSuperUserDto}`;
  }

  findAll() {
    return `This action returns all superUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} superUser`;
  }

  update(id: number, updateSuperUserDto: UpdateSuperUserDto) {
    return `This action updates a #${id}, ${updateSuperUserDto} superUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} superUser`;
  }
}

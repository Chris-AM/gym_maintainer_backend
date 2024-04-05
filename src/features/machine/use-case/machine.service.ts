import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from '../domain/dto/create-machine.dto';
import { UpdateMachineDto } from '../domain/dto/update-machine.dto';

@Injectable()
export class MachineService {
  create(createMachineDto: CreateMachineDto) {
    return `This action adds a new machine at ${createMachineDto}`;
  }

  findAll() {
    return `This action returns all machine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return `This action updates a #${id}, ${updateMachineDto} machine`;
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}

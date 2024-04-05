import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from '../domain/dto/create-service.dto';
import { UpdateServiceDto } from '../domain/dto/update-service.dto';

@Injectable()
export class ServiceService {
  create(createServiceDto: CreateServiceDto) {
    return `This action adds a new service at ${createServiceDto}`;
  }

  findAll() {
    return `This action returns all service`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id}, ${updateServiceDto} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

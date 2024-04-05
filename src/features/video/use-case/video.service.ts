import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from '../domain/dto/create-video.dto';
import { UpdateVideoDto } from '../domain/dto/update-video.dto';

@Injectable()
export class VideoService {
  create(createVideoDto: CreateVideoDto) {
    return `This action adds a new video at ${createVideoDto}`;
  }

  findAll() {
    return `This action returns all video`;
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id}, ${updateVideoDto} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}

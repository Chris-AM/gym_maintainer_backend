import { Module } from '@nestjs/common';
import { VideoService } from './use-case/video.service';
import { VideoController } from './use-case/video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity } from './domain/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEntity])],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}

import { Module } from '@nestjs/common';
import { VideoService } from './use-case/video.service';
import { VideoController } from './use-case/video.controller';

@Module({
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}

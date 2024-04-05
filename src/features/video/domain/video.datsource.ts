import { VideoEntity } from './video.entity';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
export abstract class VideoDataSource {
  abstract createVideo(createVideoDto: CreateVideoDto): Promise<VideoEntity>;
  abstract getVideoById(id: string): Promise<VideoEntity>;
  abstract getVideos(): Promise<VideoEntity[]>;
  abstract updateVideo(
    id: string,
    updateVideoDto: UpdateVideoDto,
  ): Promise<VideoEntity>;
  abstract deleteVideo(id: string): Promise<void>;
}

import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateVideoDto {
  @ApiProperty({ description: 'Título del video' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Información del video' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Url del video de youtube',
    example: 'https://www.youtube.com/watch?v=videoId',
  })
  @IsString()
  @IsNotEmpty()
  videoUrl: string;
}

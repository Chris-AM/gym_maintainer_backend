import { ApiProperty } from '@nestjs/swagger';
import { CreateBaseUserDTO } from '../../../domain/create-base-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuperUserDto extends CreateBaseUserDTO {
  @ApiProperty({
    required: true,
    type: String,
    description: 'DNI/RUT del Dueño del Gimnasio',
  })
  @IsNotEmpty()
  @IsString()
  readonly dni: string;
  @ApiProperty({
    required: true,
    type: String,
    description: 'Nombre del Gimnasio',
  })
  readonly gymName: string;
  @ApiProperty({
    required: true,
    type: String,
    description: 'Dirección del Gimnasio',
  })
  @IsNotEmpty()
  @IsString()
  readonly direction: string;
}

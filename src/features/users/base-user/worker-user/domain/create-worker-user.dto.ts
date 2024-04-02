import { ApiProperty } from '@nestjs/swagger';
import { CreateBaseUserDTO } from '../../domain/create-base-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkerUserDto extends CreateBaseUserDTO {
  @ApiProperty({
    required: true,
    type: String,
    description: 'DNI/RUT del Trabajador',
  })
  @IsNotEmpty()
  @IsString()
  readonly dni: string;
}

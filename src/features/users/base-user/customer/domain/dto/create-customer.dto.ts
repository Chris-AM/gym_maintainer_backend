import { ApiProperty } from '@nestjs/swagger';
import { CreateBaseUserDTO } from '../../../domain/create-base-user.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto extends CreateBaseUserDTO {
  @ApiProperty({
    required: true,
    type: String,
    description:
      'ID del coach al que pertenece el cliente (Todo cliente debe tener un coach)',
  })
  @IsString()
  @IsNotEmpty()
  coach: string;
  @ApiProperty({
    required: false,
    type: String,
    description: 'Id del plan, no es requerido para crear un cliente',
  })
  @IsString()
  @IsOptional()
  plan: string;
  @ApiProperty({
    required: true,
    type: String,
    description: 'Servicio extra que puede tener el cliente',
    example: 'Karate, Yoga, etc.',
  })
  @IsString()
  @IsOptional()
  service: string;
}

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Nombre del servicio',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Descripción del servicio',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'Precio del servicio',
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'Duración del servicio',
    example: '1 <- 1 mes, etc.',
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'Días a la semana que se realizará el servicio',
    example: '1 <- 1 vez a la semana, etc.',
  })
  @IsNumber()
  @IsNotEmpty()
  daysAWeek: number;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Coach que imparte el servicio (ID del coach)',
  })
  @IsString()
  @IsNotEmpty()
  chief: string;
}

import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePlanDto {
  @ApiProperty({
    description: 'Nombre del Plan',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Descripción del Plan',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Precio del Plan',
    type: Number,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Duración del Plan',
    type: Number,
    required: true,
    example: '1 <- 1 mes, etc.',
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: 'Días a la semana que se realizará el plan',
    type: Number,
    required: true,
    example: '1 <- 1 vez a la semana, etc.',
  })
  @IsNumber()
  @IsNotEmpty()
  daysAWeek: number;

  @ApiProperty()
  @IsNotEmpty()
  excercises: string[];
}

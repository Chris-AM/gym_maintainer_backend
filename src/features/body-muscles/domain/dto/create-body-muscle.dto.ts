import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBodyMuscleDto {
  @ApiProperty({
    example: 'Biceps',
    description: 'Nombre del músculo',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    example: 'Músculo que se encuentra en la parte frontal del brazo',
    description: 'Descripción del músculo',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty({
    description: 'Icono del músculo',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly icon?: string;
  @ApiProperty({
    description:
      'Lista de los mejores ejercicios para el músculo (usa los IDS)',
    required: false,
  })
  @IsString({ each: true })
  @IsOptional()
  readonly bestExercises?: string[];
}

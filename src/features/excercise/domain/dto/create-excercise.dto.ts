import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateExcerciseDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Nombre del Ejercicio',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @ApiProperty({
    required: true,
    type: String,
    description: 'Descripción del Ejercicio',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Duración del Ejercicio',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly duration: number;
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Calorias promedio que quema el ejercicio',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly calories: number;
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Cantidad de repeticiones del ejercicio al inicio',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly initValue: number;
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Cantidad de repeticiones del ejercicio actualmente',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly currentValue: number;
  @ApiProperty({
    required: true,
    type: Number,
    description: 'Secuencias del Ejercicio',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly secuencies: number;
  @ApiProperty({
    required: true,
    type: Array,
    description: 'Video o videos del Ejercicio (por sus ID)',
  })
  readonly video: string[];
  @ApiProperty({
    required: true,
    type: Array,
    description: 'Maquinas que se pueden usar para el ejercicio (por sus ID)',
  })
  readonly machine: string[];
  @ApiProperty({
    required: true,
    type: Array,
    description: 'Foco o focos del Ejercicio según los músculos (por sus ID)',
  })
  readonly focus: string[];
}

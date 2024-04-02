import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMachineDto {
  @ApiProperty({
    description: 'Nombre de la máquina',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Tipo de máquina',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    description: 'Marca de la máquina',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    description: 'Descripción de la máquina',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Advertencias de la máquina',
    required: true,
    type: String,
    example: 'Al momento de usar esta máquina, consulte con su Coach.',
  })
  @IsString()
  @IsNotEmpty()
  warnings: string;
}

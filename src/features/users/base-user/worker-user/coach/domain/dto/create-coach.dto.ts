import { ApiProperty } from '@nestjs/swagger';
import { CreateWorkerUserDto } from '../../../domain/create-worker-user.dto';

export class CreateCoachDto extends CreateWorkerUserDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Grado académico del coach',
  })
  readonly degree: string;
  @ApiProperty({
    required: false,
    type: [String],
    description: 'Arreglo de id de estudiantes',
  })
  readonly students: string[];
}

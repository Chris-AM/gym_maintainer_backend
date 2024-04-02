import { ApiProperty } from '@nestjs/swagger';
import { CreateWorkerUserDto } from '../../../domain/create-worker-user.dto';

export class CreateAdminDto extends CreateWorkerUserDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Area o departamento del administrador',
  })
  readonly area: string;
}

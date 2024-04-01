import { PartialType } from '@nestjs/swagger';
import { CreateWorkerUserDto } from './create-worker-user.dto';

export class UpdateWorkerUserDto extends PartialType(CreateWorkerUserDto) {}

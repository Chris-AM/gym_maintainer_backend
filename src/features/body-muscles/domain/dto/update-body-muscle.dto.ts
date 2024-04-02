import { PartialType } from '@nestjs/swagger';
import { CreateBodyMuscleDto } from './create-body-muscle.dto';

export class UpdateBodyMuscleDto extends PartialType(CreateBodyMuscleDto) {}

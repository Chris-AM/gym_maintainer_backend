import { PartialType } from '@nestjs/swagger';
import { CreateBaseUserDTO } from './create-base-user.dto';

export class UpdateBaseUserDTO extends PartialType(CreateBaseUserDTO) {}

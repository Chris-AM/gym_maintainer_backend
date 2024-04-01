import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateBaseUserDTO {
  @ApiProperty({
    type: Types.ObjectId,
  })
  nonce: Types.ObjectId;
  @ApiProperty({
    required: true,
    type: String,
  })
  name: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  email: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  password: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  phoneNumber: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  avatar: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  type: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateBaseUserDTO {
  @ApiProperty({
    required: true,
    type: String,
    description: 'Nombre completo del usuario',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  readonly type: string;
}

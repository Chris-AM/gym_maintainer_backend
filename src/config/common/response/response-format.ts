import { ApiProperty } from '@nestjs/swagger';

export class ResponseFormat<T> {
  @ApiProperty({
    description: 'Describes if data Is an Array',
    example: false,
  })
  isArray: boolean;
  @ApiProperty({
    description: 'Shows Response Path',
    example: '/api/v1/user',
  })
  path: string;
  @ApiProperty({
    description: 'Duration of the request in milliseconds',
    example: '0.0001ms',
  })
  duration: string;
  @ApiProperty({
    description: 'HTTP Status Code',
    example: 200,
  })
  statusCode: number;
  @ApiProperty({
    description: 'Method used to make the request',
    example: 'GET',
  })
  method: string;
  @ApiProperty({
    description: 'Data returned from the request',
    example: 'User Data',
  })
  data: T;
}

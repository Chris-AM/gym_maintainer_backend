import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    required: false,
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    required: false,
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(0)
  @Type(() => Number)
  offset?: number;

  constructor(limit = 10, offset = 0) {
    this.limit = limit;
    this.offset = offset;
  }
}

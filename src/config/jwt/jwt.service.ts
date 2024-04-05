import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { IJwtInterface } from './jwt.interface';

@Injectable()
export class JwtService implements IJwtInterface {
  constructor(private configService: ConfigService) {}
  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }
  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_SECRET');
  }
  getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME');
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { BcryptService } from './bcrypt/bcrypt.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })],
  providers: [LoggerService, BcryptService],
  exports: [],
})
export class EnvironmentConfigModule {}

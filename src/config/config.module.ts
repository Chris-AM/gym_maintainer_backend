import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { BcryptService } from './bcrypt/bcrypt.service';
import { DatabaseService } from './database/database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseODMConfig } from './database/database.helper';

const configService = new ConfigService();
const loggerService = new LoggerService(configService);
const service: DatabaseService = new DatabaseService(
  configService,
  loggerService,
);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(getMongooseODMConfig(service).uri),
  ],
  providers: [LoggerService, BcryptService, DatabaseService],
  exports: [LoggerService, BcryptService, DatabaseService],
})
export class EnvironmentConfigModule {}

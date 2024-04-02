import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { BcryptService } from './bcrypt/bcrypt.service';
import { DatabaseService } from './database/database.service';
import { JwtService } from './jwt/jwt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from './database/database.helper';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [DatabaseService],
      useFactory: (configService: DatabaseService) =>
        getTypeOrmModuleOptions(configService),
    })
  ],
  providers: [LoggerService, BcryptService, DatabaseService, JwtService],
  exports: [LoggerService, BcryptService, DatabaseService, JwtService],
})
export class EnvironmentConfigModule {}

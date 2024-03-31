import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { IDatabaseInterface } from './database.interface';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class DatabaseService implements IDatabaseInterface {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {}

  getDatabaseHost(): string {
    const host = this.configService.get<string>('DB_HOST');
    console.log('host', host);
    if (host === undefined || host === null || host === '') {
      throw new Error('Database host not found');
    }
    return host;
  }
  getDatabasePort(): number {
    const port = this.configService.get<number>('DB_PORT');
    if (port === undefined || port === null || port === 0) {
      throw new Error('Database port not found');
    }
    return port;
  }
  getDatabaseUsername(): string {
    const username = this.configService.get<string>('DB_USERNAME');
    if (username === undefined || username === null || username === '') {
      throw new Error('Database username not found');
    }
    return username;
  }
  getDatabasePassword(): string {
    const password = this.configService.get<string>('DB_PASSWORD');
    if (password === undefined || password === null || password === '') {
      throw new Error('Database password not found');
    }
    return password;
  }
  getDatabaseName(): string {
    const database = this.configService.get<string>('DB_NAME');
    if (database === undefined || database === null || database === '') {
      throw new Error('Database name not found');
    }
    return database;
  }
}

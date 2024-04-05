import { ConfigService } from '@nestjs/config';
import { LoggerService } from '../logger/logger.service';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let databaseService: DatabaseService;
  let configService: ConfigService;
  let loggerService: LoggerService;

  beforeEach(() => {
    configService = new ConfigService();
    loggerService = new LoggerService(configService);
    databaseService = new DatabaseService(configService, loggerService);
  });

  it('should return encoded database type', () => {
    jest.spyOn(configService, 'get').mockReturnValue('mysql');
    const type = databaseService.getDatabaseType();
    expect(type).toBe('mysql');
  });

  it('should log error when database type is not found', () => {
    jest.spyOn(configService, 'get').mockReturnValue(null);
    const spy = jest.spyOn(loggerService, 'error');
    databaseService.getDatabaseType();
    expect(spy).toHaveBeenCalled();
  });
});

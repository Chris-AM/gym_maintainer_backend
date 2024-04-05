import { ArgumentsHost, HttpException } from '@nestjs/common';
import { LoggerService } from '../../logger/logger.service';
import { HttpExceptionFilter } from './http-exception.filter';
import { ConfigService } from '@nestjs/config';

describe('HttpExceptionFilter', () => {
  let httpExceptionFilter: HttpExceptionFilter;
  let loggerService: LoggerService;
  let configService: ConfigService;

  beforeEach(() => {
    loggerService = new LoggerService(configService);
    httpExceptionFilter = new HttpExceptionFilter(loggerService);
  });

  it('should catch HttpException and log error', () => {
    const exception = new HttpException('Not Found', 404);
    const host = {
      switchToHttp: () => ({
        getResponse: () => ({
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        }),
        getRequest: () => ({
          url: 'http://localhost:3000',
          method: 'GET',
        }),
      }),
    } as ArgumentsHost;
    const spy = jest.spyOn(loggerService, 'error');
    httpExceptionFilter.catch(exception, host);
    expect(spy).toHaveBeenCalled();
  });

  it('should catch non-HttpException and log internal server error', () => {
    const exception = new Error('Internal Server Error');
    const host = {
      switchToHttp: () => ({
        getResponse: () => ({
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        }),
        getRequest: () => ({
          url: 'http://localhost:3000',
          method: 'GET',
        }),
      }),
    } as ArgumentsHost;
    const spy = jest.spyOn(loggerService, 'error');
    httpExceptionFilter.catch(exception, host);
    expect(spy).toHaveBeenCalled();
  });
});

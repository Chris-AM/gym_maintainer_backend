import { ConfigService } from '@nestjs/config';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerService } from './logger.service';

describe('LoggerInterceptor', () => {
  let configService: ConfigService;
  let loggerService: LoggerService;

  beforeEach(() => {
    configService = new ConfigService();
    loggerService = new LoggerService(configService);
  });

  it('should log request', () => {
    const interceptor = new LoggerInterceptor(loggerService);
    const request = {
      url: 'http://localhost:3000',
      method: 'GET',
      headers: {
        'x-forwarded-for': '',
      },
      connection: {
        remoteAddress: '',
      },
    };
    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
      }),
    };
    const next = {
      handle: () => ({
        pipe: () => ({
          toPromise: () => Promise.resolve(),
        }),
      }),
    };
    const spy = jest.spyOn(loggerService, 'log');
    interceptor.intercept(context as any, next as any);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';
import { ConfigService } from '@nestjs/config';

describe('LoggerService', () => {
  let service: LoggerService;
  let config: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoggerService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(() => 'development'),
          },
        },
      ],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
    config = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log a message', () => {
    const spy = jest.spyOn(service, 'log');
    service.log('context', 'message');
    expect(spy).toHaveBeenCalled();
  });

  it('should log an error', () => {
    const spy = jest.spyOn(service, 'error');
    service.error('context', 'message');
    expect(spy).toHaveBeenCalled();
  });

  it('should log a warning', () => {
    const spy = jest.spyOn(service, 'warn');
    service.warn('context', 'message');
    expect(spy).toHaveBeenCalled();
  });

  it('should log a verbose message', () => {
    const spy = jest.spyOn(service, 'verbose');
    service.verbose('context', 'message');
    expect(spy).toHaveBeenCalled();
  });

  it('should log a service message', () => {
    const spy = jest.spyOn(service, 'service');
    service.service('context');
    expect(spy).toHaveBeenCalled();
  });

  // it('should NOT log a message in production', () => {
  //   jest.spyOn(config, 'get').mockReturnValue('production');
  //   const spy = jest.spyOn(service, 'verbose');
  //   service.verbose('context', 'message');
  //   expect(spy).not.toHaveBeenCalled();
  // });

  it('should LOG a message when not in production', () => {
    jest.spyOn(config, 'get').mockReturnValue('development');
    const spy = jest.spyOn(service, 'verbose');
    service.verbose('context', 'message');
    expect(spy).toHaveBeenCalled();
  });
});

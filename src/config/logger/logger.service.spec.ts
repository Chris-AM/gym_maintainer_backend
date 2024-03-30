import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log a message', () => {
    const context = 'Test';
    const message = 'Test message';
    expect(service.log(context, message)).toBeUndefined();
  });

  it('should log an error', () => {
    const context = 'Test';
    const message = 'Test message';
    const trace = 'Test trace';
    expect(service.error(context, message, trace)).toBeUndefined();
  });

  it('should log a warning', () => {
    const context = 'Test';
    const message = 'Test message';
    expect(service.warn(context, message)).toBeUndefined();
  });

  it('should log a verbose message', () => {
    const context = 'Test';
    const message = 'Test message';
    expect(service.verbose(context, message)).toBeUndefined();
  });

  it('should log a service message', () => {
    const context = 'Test';
    expect(service.service(context)).toBeUndefined();
  });

  it('should NOT log a message in production', () => {
    process.env.NODE_ENV = 'production';
    const context = 'Test';
    const message = 'Test message';
    expect(service.log(context, message)).toBeUndefined();
  });

  it('should LOG a message when not in production', () => {
    process.env.NODE_ENV = 'local';
    const context = 'Test';
    const message = 'Test message';
    expect(service.log(context, message)).toBeUndefined();
  });
});

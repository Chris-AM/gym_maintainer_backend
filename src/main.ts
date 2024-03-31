import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './config/logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { LoggerInterceptor } from './config/logger/logger.interceptor';
import { ResponseInterceptor } from './config/common/response/response.interceptor';
import { HttpExceptionFilter } from './config/common/http-exception/http-exception.filter';

async function gymGestor() {
  const app = await NestFactory.create(AppModule);

  const config: ConfigService = new ConfigService();
  const logger = new LoggerService(config);
  const loggerInterceptor = new LoggerInterceptor(logger);
  const responseInterceptor = new ResponseInterceptor();
  const httpException = new HttpExceptionFilter(logger);

  app.enableCors();
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(loggerInterceptor);
  app.useGlobalInterceptors(responseInterceptor);
  app.useGlobalFilters(httpException);
  await app.listen(3000);
}
gymGestor();

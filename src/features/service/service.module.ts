import { Module } from '@nestjs/common';
import { ServiceService } from './use-case/service.service';
import { ServiceController } from './use-case/service.controller';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}

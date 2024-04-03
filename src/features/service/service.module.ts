import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService } from './use-case/service.service';
import { ServiceController } from './use-case/service.controller';
import { ServiceEntity } from './domain/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntity])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}

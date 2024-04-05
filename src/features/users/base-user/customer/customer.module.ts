import { Module } from '@nestjs/common';
import { CustomerService } from './use-case/customer.service';
import { CustomerController } from './use-case/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './domain/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}

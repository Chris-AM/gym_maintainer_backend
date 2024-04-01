import { Module } from '@nestjs/common';
import { CustomerService } from './use-case/customer.service';
import { CustomerController } from './use-case/customer.controller';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}

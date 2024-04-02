import { Module } from '@nestjs/common';
import { CustomerService } from './use-case/customer.service';
import { CustomerController } from './use-case/customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerEntity, CustomerSchema } from './domain/customer.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CustomerEntity.name,
        useFactory: () =>
          CustomerSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}

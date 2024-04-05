import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { SuperUserModule } from './super-user/super-user.module';
import { WorkerUserModule } from './worker-user/worker-user.module';

@Module({
  imports: [CustomerModule, SuperUserModule, WorkerUserModule],
  exports: [CustomerModule, SuperUserModule, WorkerUserModule],
})
export class BaseUserModule {}

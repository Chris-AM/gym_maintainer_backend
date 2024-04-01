import { Module } from '@nestjs/common';
import { WorkerUserService } from './worker-user.service';
import { WorkerUserController } from './worker-user.controller';
import { AdminModule } from './admin/admin.module';
import { CoachModule } from './coach/coach.module';

@Module({
  controllers: [WorkerUserController],
  providers: [WorkerUserService],
  imports: [AdminModule, CoachModule],
})
export class WorkerUserModule {}

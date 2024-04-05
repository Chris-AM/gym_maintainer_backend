import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CoachModule } from './coach/coach.module';

@Module({
  imports: [AdminModule, CoachModule],
})
export class WorkerUserModule {}

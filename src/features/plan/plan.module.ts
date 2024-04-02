import { Module } from '@nestjs/common';
import { PlanService } from './use-case/plan.service';
import { PlanController } from './use-case/plan.controller';

@Module({
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}

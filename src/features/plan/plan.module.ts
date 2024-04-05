import { Module } from '@nestjs/common';
import { PlanService } from './use-case/plan.service';
import { PlanController } from './use-case/plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntity } from './domain/plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanEntity])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}

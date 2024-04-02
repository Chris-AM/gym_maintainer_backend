import { Module } from '@nestjs/common';
import { PlanService } from './use-case/plan.service';
import { PlanController } from './use-case/plan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanEntity, PlanSchema } from './domain/plan.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PlanEntity.name,
        useFactory: () => PlanSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoachEntity, CoachSchema } from './domain/coach.entity';
import { CoachService } from './use-case/coach.service';
import { CoachController } from './use-case/coach.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CoachEntity.name,
        useFactory: () => CoachSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}

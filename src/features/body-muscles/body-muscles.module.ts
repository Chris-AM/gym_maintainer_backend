import { Module } from '@nestjs/common';
import { BodyMusclesService } from './use-case/body-muscles.service';
import { BodyMusclesController } from './use-case/body-muscles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BodyMuscleEntity,
  BodyMuscleSchema,
} from './domain/body-muscle.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: BodyMuscleEntity.name,
        useFactory: () =>
          BodyMuscleSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [BodyMusclesController],
  providers: [BodyMusclesService],
})
export class BodyMusclesModule {}

import { Module } from '@nestjs/common';
import { ExcerciseService } from './use-cases/excercise.service';
import { ExcerciseController } from './use-cases/excercise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExcerciseEntity, ExcerciseSchema } from './domain/excercise.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ExcerciseEntity.name,
        useFactory: () =>
          ExcerciseSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [ExcerciseController],
  providers: [ExcerciseService],
})
export class ExcerciseModule {}

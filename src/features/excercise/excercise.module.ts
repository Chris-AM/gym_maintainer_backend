import { Module } from '@nestjs/common';
import { ExcerciseService } from './excercise.service';
import { ExcerciseController } from './excercise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExcerciseSchema } from './entities/excercise.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: 'Excercise', useFactory: () => ExcerciseSchema },
    ]),
  ],
  controllers: [ExcerciseController],
  providers: [ExcerciseService],
})
export class ExcerciseModule {}

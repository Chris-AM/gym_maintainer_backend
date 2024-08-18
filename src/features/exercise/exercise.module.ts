import { Module } from '@nestjs/common';
import { ExerciseService } from './use-cases/exercise.service';
import { ExerciseController } from './use-cases/exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './domain/exercise';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseEntity])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}

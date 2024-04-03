import { Module } from '@nestjs/common';
import { ExcerciseService } from './use-cases/excercise.service';
import { ExcerciseController } from './use-cases/excercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseEntity } from './domain/excercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcerciseEntity])],
  controllers: [ExcerciseController],
  providers: [ExcerciseService],
})
export class ExcerciseModule {}

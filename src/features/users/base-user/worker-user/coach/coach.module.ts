import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoachService } from './use-case/coach.service';
import { CoachController } from './use-case/coach.controller';
import { CoachEntity } from './domain/coach.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoachEntity])],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}

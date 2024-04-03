import { Module } from '@nestjs/common';
import { BodyMusclesService } from './use-case/body-muscles.service';
import { BodyMusclesController } from './use-case/body-muscles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyMuscleEntity } from './domain/body-muscle.entity';
import { BodyMuscleIconEntity } from './domain/body-muscle.icon';
@Module({
  imports: [TypeOrmModule.forFeature([BodyMuscleEntity, BodyMuscleIconEntity])],
  controllers: [BodyMusclesController],
  providers: [BodyMusclesService],
})
export class BodyMusclesModule {}

import { Module } from '@nestjs/common';
import { BodyMusclesService } from './body-muscles.service';
import { BodyMusclesController } from './body-muscles.controller';

@Module({
  controllers: [BodyMusclesController],
  providers: [BodyMusclesService],
})
export class BodyMusclesModule {}

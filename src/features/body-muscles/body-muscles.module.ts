import { Module } from '@nestjs/common';
import { BodyMusclesService } from './use-case/body-muscles.service';
import { BodyMusclesController } from './use-case/body-muscles.controller';

@Module({
  controllers: [BodyMusclesController],
  providers: [BodyMusclesService],
})
export class BodyMusclesModule {}

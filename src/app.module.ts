import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './config/config.module';
import { ExcerciseModule } from './features/excercise/excercise.module';
import { BodyMusclesModule } from './features/body-muscles/body-muscles.module';
import { MachineModule } from './features/machine/machine.module';
import { VideoModule } from './features/video/video.module';
import { PlanModule } from './features/plan/plan.module';
import { ServiceModule } from './features/service/service.module';
import { BaseUserModule } from './features/users/base-user/base-user.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    ExcerciseModule,
    BodyMusclesModule,
    MachineModule,
    VideoModule,
    PlanModule,
    ServiceModule,
    BaseUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

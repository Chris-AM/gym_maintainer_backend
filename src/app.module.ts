import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './config/config.module';
import { SuperUserModule } from './features/users/super-user/super-user.module';
import { ExcerciseModule } from './features/excercise/excercise.module';
import { BodyMusclesModule } from './features/body-muscles/body-muscles.module';
import { MachineModule } from './features/machine/machine.module';
import { VideoModule } from './features/video/video.module';
import { PlanModule } from './features/plan/plan.module';
import { ServiceModule } from './features/service/service.module';
import { WorkerUserModule } from './features/users/worker-user/worker-user.module';
import { CustomerModule } from './features/users/customer/customer.module';

@Module({
  imports: [EnvironmentConfigModule, SuperUserModule, ExcerciseModule, BodyMusclesModule, MachineModule, VideoModule, PlanModule, ServiceModule, WorkerUserModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

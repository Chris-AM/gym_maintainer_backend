import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentConfigModule } from './config/config.module';
import { SuperUserModule } from './features/users/super-user/super-user.module';

@Module({
  imports: [EnvironmentConfigModule, SuperUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

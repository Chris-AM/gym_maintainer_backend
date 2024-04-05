import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperUserService } from './use-cases/super-user.service';
import { SuperUserController } from './use-cases/super-user.controller';
import { SuperUserEntity } from './domain/super-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuperUserEntity])],
  controllers: [SuperUserController],
  providers: [SuperUserService],
})
export class SuperUserModule {}

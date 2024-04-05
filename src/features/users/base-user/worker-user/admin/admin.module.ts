import { Module } from '@nestjs/common';
import { AdminService } from './use-case/admin.service';
import { AdminController } from './use-case/admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './domain/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

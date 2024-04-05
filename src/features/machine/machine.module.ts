import { Module } from '@nestjs/common';
import { MachineService } from './use-case/machine.service';
import { MachineController } from './use-case/machine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineEntity } from './domain/machine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MachineEntity])],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}

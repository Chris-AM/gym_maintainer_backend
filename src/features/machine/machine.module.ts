import { Module } from '@nestjs/common';
import { MachineService } from './use-case/machine.service';
import { MachineController } from './use-case/machine.controller';

@Module({
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}

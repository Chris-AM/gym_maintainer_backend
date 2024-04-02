import { Module } from '@nestjs/common';
import { MachineService } from './use-case/machine.service';
import { MachineController } from './use-case/machine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineEntity, MachineSchema } from './domain/machine.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: MachineEntity.name,
        useFactory: () =>
          MachineSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}

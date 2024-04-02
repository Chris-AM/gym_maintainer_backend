import { Module } from '@nestjs/common';
import { ServiceService } from './use-case/service.service';
import { ServiceController } from './use-case/service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceEntity, ServiceSchema } from './domain/service.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ServiceEntity.name,
        useFactory: () =>
          ServiceSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}

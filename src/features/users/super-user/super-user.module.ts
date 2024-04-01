import { Module } from '@nestjs/common';
import { SuperUserService } from './use-cases/super-user.service';
import { SuperUserController } from './use-cases/super-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SuperUserEntity,
  SuperUserSchema,
} from './domain/entities/super-user.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SuperUserEntity.name,
        useFactory: () =>
          SuperUserSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [SuperUserController],
  providers: [SuperUserService],
})
export class SuperUserModule {}

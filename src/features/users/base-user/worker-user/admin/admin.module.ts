import { Module } from '@nestjs/common';
import { AdminService } from './use-case/admin.service';
import { AdminController } from './use-case/admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminEntity, AdminSchema } from './domain/admin.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: AdminEntity.name,
        useFactory: () => AdminSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}

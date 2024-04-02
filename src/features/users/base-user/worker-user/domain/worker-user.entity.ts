import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BaseUserEntity } from '../../domain/base-user.entity';
import { v4 } from 'uuid';

export type WorkerUserDocument = WorkerUserEntity & Document;
@Schema()
export class WorkerUserEntity extends BaseUserEntity {
  @Prop({ unique: true, type: String, default: v4 })
  workerId: string;
  @Prop({ required: true, type: String, unique: true })
  dni: string;
}

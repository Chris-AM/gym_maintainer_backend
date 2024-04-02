import { Document } from 'mongoose';
import { WorkerUserEntity } from '../../domain/worker-user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CustomerEntity } from '../../../customer/domain/customer.entity';
import { v4 } from 'uuid';

export type CoachDocument = CoachEntity & Document;
@Schema({
  timestamps: true,
  collection: 'coachUser',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class CoachEntity extends WorkerUserEntity {
  @Prop({ unique: true, type: String, default: v4 })
  coachId: string;
  @Prop({ required: true, type: String })
  degree: string;
  @Prop({ required: false, type: CustomerEntity, default: [] })
  students: CustomerEntity[];

  constructor() {
    super();
    this.type = 'coach';
  }
}

const CoachSchema = SchemaFactory.createForClass(CoachEntity);
CoachSchema.virtual('id').get(function (this: CoachDocument) {
  return this._id;
});

export { CoachSchema };

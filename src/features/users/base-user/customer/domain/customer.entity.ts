import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 } from 'uuid';
import { BaseUserEntity } from '../../domain/base-user.entity';
import { CoachEntity } from '../../worker-user/coach/domain/coach.entity';
import { PlanEntity } from 'src/features/plan/domain/plan.entity';
import { ServiceEntity } from 'src/features/service/domain/service.entity';

export type CustomerDocument = CustomerEntity & Document;

@Schema({
  timestamps: true,
  collection: 'customerUser',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id_;
      delete ret.__v;
      return ret;
    },
  },
})
export class CustomerEntity extends BaseUserEntity {
  @Prop({ unique: true, type: v4 })
  customerId: string;
  @Prop({ required: true, type: CoachEntity, ref: 'coachUser' })
  coach: Types.ObjectId;
  @Prop({ required: false, type: PlanEntity, ref: 'Plan', default: [] })
  plan: PlanEntity[];
  @Prop({ required: false, type: ServiceEntity, ref: 'Service', default: [] })
  service: Types.ObjectId;
  constructor() {
    super();
    this.type = 'customer';
  }
}

const CustomerSchema = SchemaFactory.createForClass(CustomerEntity);
CustomerSchema.virtual('id').get(function (this: CustomerDocument) {
  return this._id;
});

export { CustomerSchema };

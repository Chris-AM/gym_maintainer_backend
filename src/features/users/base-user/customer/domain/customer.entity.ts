import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseUserEntity } from '../../domain/base-user.entity';
import { CoachEntity } from '../../worker-user/coach/domain/coach.entity';
import { PlanEntity } from 'src/features/plan/entities/plan.entity';
import { ServiceEntity } from 'src/features/service/entities/service.entity';
import { v4 } from 'uuid';

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
  @Prop({ required: true, type: CoachEntity, ref: 'Coach' })
  coach: CoachEntity;
  @Prop({ required: false, type: PlanEntity, ref: 'Plan', default: [] })
  plan: PlanEntity[];
  @Prop({ required: false, type: ServiceEntity, ref: 'Service', default: [] })
  service: ServiceEntity;
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

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CoachEntity } from 'src/features/users/base-user/worker-user/coach/domain/coach.entity';
import { v4 } from 'uuid';

export type ServiceDocument = ServiceEntity & Document;

@Schema({
  timestamps: true,
  collection: 'service',
})
export class ServiceEntity {
  @Prop({ unique: true, type: String, default: v4 })
  serviceId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  duration: number;
  @Prop({ required: true, type: Boolean, default: true })
  isActive: boolean;
  @Prop({ required: true, type: Number })
  daysAWeek: number;
  @Prop({ required: true, type: CoachEntity, ref: 'coachUser' })
  chief: CoachEntity;
}

const ServiceSchema = SchemaFactory.createForClass(ServiceEntity);
ServiceSchema.virtual('id').get(function (this: ServiceDocument) {
  return this._id;
});

export { ServiceSchema };

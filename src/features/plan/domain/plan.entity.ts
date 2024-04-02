import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExcerciseEntity } from 'src/features/excercise/domain/excercise.entity';
import { v4 } from 'uuid';

export type PlanDocument = PlanEntity & Document;

@Schema({
  timestamps: true,
  collection: 'plan',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id_;
      delete ret.__v;
      return ret;
    },
  },
})
export class PlanEntity {
  @Prop({ unique: true, type: String, default: v4 })
  planId: string;
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
  @Prop({
    required: true,
    type: ExcerciseEntity,
    ref: 'Excercise',
    default: [],
  })
  excercises: ExcerciseEntity[];
}

const PlanSchema = SchemaFactory.createForClass(PlanEntity);
PlanSchema.virtual('id').get(function (this: PlanDocument) {
  return this._id;
});

export { PlanSchema };

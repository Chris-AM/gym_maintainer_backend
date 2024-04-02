import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 } from 'uuid';

export type ExcerciseDocument = ExcerciseEntity & Document;

@Schema({
  timestamps: true,
  collection: 'excercise',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class ExcerciseEntity {
  @Prop({ unique: true, default: v4, type: Types.ObjectId })
  excerciseId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  duration: number;
  @Prop({ required: true })
  calories: number;
  @Prop({ required: true })
  initValue: number;
  @Prop({ required: true })
  currentValue: number;
  @Prop({ required: true })
  video: string;
  @Prop({ required: true })
  machine: string;
  @Prop({ required: true })
  focus: string;
  @Prop({ required: true })
  secuencies: string;
}

const ExcerciseSchema = SchemaFactory.createForClass(ExcerciseEntity);
ExcerciseSchema.virtual('id').get(function (this: ExcerciseDocument) {
  return this._id;
});
export { ExcerciseSchema };

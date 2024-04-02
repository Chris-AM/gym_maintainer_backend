import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BodyMuscleDocument = BodyMuscle & Document;

@Schema({
  timestamps: true,
  collection: 'bodyMuscles',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class BodyMuscle {}

const BodyMuscleSchema = SchemaFactory.createForClass(BodyMuscle);

BodyMuscleSchema.virtual('id').get(function (this: BodyMuscleDocument) {
  return this._id;
});

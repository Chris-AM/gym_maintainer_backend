import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ExcerciseEntity } from 'src/features/excercise/entities/excercise.entity';
import { v4 } from 'uuid';

export type BodyMuscleDocument = BodyMuscleEntity & Document;

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
export class BodyMuscleEntity {
  @Prop({ unique: true, type: v4 })
  muscleId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: false, default: '' })
  icon: string;
  @Prop({
    required: false,
    type: ExcerciseEntity,
    ref: 'Excercise',
    default: [],
  })
  bestExcercises: ExcerciseEntity[];
}

const BodyMuscleSchema = SchemaFactory.createForClass(BodyMuscleEntity);
BodyMuscleSchema.virtual('id').get(function (this: BodyMuscleDocument) {
  return this._id;
});

export { BodyMuscleSchema };
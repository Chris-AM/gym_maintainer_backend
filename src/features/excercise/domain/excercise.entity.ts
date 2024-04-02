import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { BodyMuscleEntity } from 'src/features/body-muscles/domain/body-muscle.entity';
import { MachineEntity } from 'src/features/machine/domain/machine.entity';
import { VideoEntity } from 'src/features/video/domain/video.entity';
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
  secuencies: number;
  @Prop({ required: true, type: VideoEntity })
  video: VideoEntity[];
  @Prop({ required: true, type: MachineEntity })
  machine: MachineEntity[];
  @Prop({ required: true, type: BodyMuscleEntity })
  focus: BodyMuscleEntity[];
}

const ExcerciseSchema = SchemaFactory.createForClass(ExcerciseEntity);
ExcerciseSchema.virtual('id').get(function (this: ExcerciseDocument) {
  return this._id;
});
export { ExcerciseSchema };

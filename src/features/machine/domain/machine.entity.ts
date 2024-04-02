import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export type MachineDocument = MachineEntity & Document;

@Schema({
  timestamps: true,
  collection: 'machine',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id_;
      delete ret.__v;
      return ret;
    },
  },
})
export class MachineEntity {
  @Prop({ unique: true, type: v4 })
  machineId: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  brand: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  warnings: string;
}

const MachineSchema = SchemaFactory.createForClass(MachineEntity);
MachineSchema.virtual('id').get(function (this: MachineDocument) {
  return this._id;
});

export { MachineSchema };

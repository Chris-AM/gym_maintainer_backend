import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseUserEntity } from '../../domain/base-user.entity';
import { v4 } from 'uuid';

export type SuperUserDocument = SuperUserEntity & Document;
@Schema({
  timestamps: true,
  collection: 'superUser',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class SuperUserEntity extends BaseUserEntity {
  @Prop({ required: true, type: String })
  dni: string;
  @Prop({ unique: true, type: String, default: v4 })
  gymId: string;
  @Prop({ required: true, type: String })
  gymName: string;
  @Prop({ required: true, type: String })
  direction: string;
  
  constructor() {
    super();
    this.type = 'super';
  }
}

const SuperUserSchema = SchemaFactory.createForClass(SuperUserEntity);
SuperUserSchema.virtual('id').get(function (this: SuperUserDocument) {
  return this._id;
});

export { SuperUserSchema };

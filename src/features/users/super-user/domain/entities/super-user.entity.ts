import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseUserEntity } from '../../../base-user/base-user.entity';

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

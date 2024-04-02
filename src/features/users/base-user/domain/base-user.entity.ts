import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BaseUserDocument = BaseUserEntity & Document;
@Schema()
export class BaseUserEntity {
  @Prop({ type: Types.ObjectId, unique: true, default: Types.ObjectId })
  nonce: Types.ObjectId;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  phoneNumber: string;
  @Prop({ required: false, default: ''})
  avatar: string;
  @Prop({ required: true })
  type: string;
  @Prop({ required: false, default: true })
  active: boolean;
}

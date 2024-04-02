import { Document } from 'mongoose';
import { WorkerUserEntity } from '../../domain/worker-user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AdminDocument = AdminEntity & Document;

@Schema({
  timestamps: true,
  collection: 'adminUser',
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class AdminEntity extends WorkerUserEntity {
  @Prop({ required: true, type: String })
  adminId: string;
  @Prop({ required: true, type: String })
  area: string;
  constructor() {
    super();
    this.type = 'admin';
  }
}

const AdminSchema = SchemaFactory.createForClass(AdminEntity);
AdminSchema.virtual('id').get(function (this: AdminDocument) {
  return this._id;
});

export { AdminSchema };

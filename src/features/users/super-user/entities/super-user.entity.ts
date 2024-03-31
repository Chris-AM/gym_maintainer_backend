import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseUserEntity } from '../../base-user.entity';

@Schema({ timestamps: true })
export class SuperUserEntity extends BaseUserEntity {
  constructor() {
    super();
    this.type = 'super';
  }
}

export const SuperUserSchema = SchemaFactory.createForClass(SuperUserEntity);

SuperUserSchema.method('toJSON', function () {
  const { _id, password, ...object } = this.toObject();
  return object;
});

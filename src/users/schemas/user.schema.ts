import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Role } from '../../roles/schemas/role.schema';

export type UserDocument = mongoose.Document & User;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  username: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  login: string;

  @Prop({
    type: mongoose.Schema.Types.String,
    required: false,
    unique: true,
    validate: /^[A-Z].{1}/g,
  })
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.Array, ref: 'Role' }] })
  role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);

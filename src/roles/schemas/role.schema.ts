import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type RoleDocument = mongoose.Document & Role;

@Schema()
export class Role {
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
    default: 'User',
  })
  title: string;

  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
    default: 'You can only write comments',
  })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

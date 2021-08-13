import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type RoleDocument = mongoose.Document & Role;

@Schema()
export class Role {
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  title: string;

  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

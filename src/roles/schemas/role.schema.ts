import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '@prisma/client';

export type RoleDocument = mongoose.Document & Role;

@Schema()
export class Role {
  @Prop({ type: mongoose.Schema.Types.Number, auto: true })
  id: number;

  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);

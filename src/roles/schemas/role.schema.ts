import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export type RoleDocument = mongoose.Document & Role;

@Schema()
export class Role {
  @ApiProperty({
    example: 'Admin',
    description: 'A title of the (current) role',
  })
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  title: string;

  @ApiProperty({
    example: 'You can ban the users and will give the benefits',
    description: 'A description of the (current) role',
  })
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
  })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

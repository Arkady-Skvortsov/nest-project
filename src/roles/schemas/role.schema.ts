import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

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
    allowNull: false,
  })
  title: string;

  @ApiProperty({
    example: 'You can ban the users and will give the benefits',
    description: 'A description of the (current) role',
  })
  @Prop({
    type: mongoose.Schema.Types.String,
    required: true,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 'SlamDunk, Docker-Cocker',
    description: 'Many to Many from User to Role into MongoDB',
  })
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, refPath: 'User' }],
    required: true,
  })
  users: User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);

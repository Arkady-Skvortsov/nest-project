import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiOperation, ApiProperty, ApiResponse } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { Role } from '../../roles/schemas/role.schema';

export type UserDocument = mongoose.Document & User;

@Schema()
export class User {
  @ApiProperty({
    example: 'Billy_Little_Big_Boy',
    description: 'A username of the (current) user',
  })
  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  username: string;

  @ApiProperty({
    example: 'Oskv7',
    description: 'A login of the (current) user',
  })
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  login: string;

  @ApiProperty({
    example: 'SweetCheese123',
    description: 'A password of the (current) user',
  })
  @Prop({
    type: mongoose.Schema.Types.String,
    required: false,
    unique: true,
    validate: /^[A-Z].{1}/g,
  })
  password: string;

  @ApiProperty({
    example: 'Subscriber, Admin',
    description: 'Many to Many from Role to Users into Mongo',
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.String, refPath: 'Role' }] })
  roles: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);

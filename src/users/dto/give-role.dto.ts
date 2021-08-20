import { ObjectId } from 'mongoose';

export interface giveRoleDTO {
  userId: ObjectId;
  roleName: string;
}

import { ObjectId } from 'mongoose';

export class RoleDTO {
  readonly name: string;
  readonly userId: ObjectId;
}

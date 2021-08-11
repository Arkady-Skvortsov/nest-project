import { ObjectId } from 'mongoose';

export class UserDTO {
  readonly username?: string;
  readonly login?: string;
  readonly password?: string;
}

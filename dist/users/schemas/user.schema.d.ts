import * as mongoose from 'mongoose';
import { Role } from '../../roles/schemas/role.schema';
export declare type UserDocument = mongoose.Document & User;
export declare class User {
    id: number;
    username: string;
    login: string;
    password: string;
    role: Role[];
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<User, any, any>, mongoose.Model<any, any, any>, undefined, any>;

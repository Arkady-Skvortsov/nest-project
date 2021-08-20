import * as mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
export declare type RoleDocument = mongoose.Document & Role;
export declare class Role {
    title: string;
    description: string;
    users: User[];
}
export declare const RoleSchema: mongoose.Schema<mongoose.Document<Role, any, any>, mongoose.Model<any, any, any>, undefined, any>;

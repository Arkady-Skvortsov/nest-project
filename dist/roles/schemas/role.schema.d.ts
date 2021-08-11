import * as mongoose from 'mongoose';
import { User } from '@prisma/client';
export declare type RoleDocument = mongoose.Document & Role;
export declare class Role {
    id: number;
    name: string;
    users: User[];
}
export declare const RoleSchema: mongoose.Schema<mongoose.Document<Role, any, any>, mongoose.Model<any, any, any>, undefined, any>;

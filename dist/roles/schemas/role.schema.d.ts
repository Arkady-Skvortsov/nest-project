import * as mongoose from 'mongoose';
export declare type RoleDocument = mongoose.Document & Role;
export declare class Role {
    title: string;
    description: string;
}
export declare const RoleSchema: mongoose.Schema<mongoose.Document<Role, any, any>, mongoose.Model<any, any, any>, undefined, any>;

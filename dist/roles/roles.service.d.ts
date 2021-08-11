import { Model, ObjectId } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { RoleDTO } from './dto/role-create.dto';
export declare class RolesService {
    private roleModel;
    constructor(roleModel: Model<RoleDocument>);
    get_all_roles(): Promise<Role[]>;
    create_new_role(roleDTO: RoleDTO): Promise<Role>;
    delete_role(id: ObjectId): Promise<void>;
    update_role(id: ObjectId, roleDTO: RoleDTO): Promise<Role>;
}

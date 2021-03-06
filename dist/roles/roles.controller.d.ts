import { ObjectId } from 'mongoose';
import { RolesService } from './roles.service';
import { RoleDTO } from './dto/role-create.dto';
import { Role } from './schemas/role.schema';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    get_all_roles(): Promise<Role[]>;
    get_correct_role(id: ObjectId): Promise<Role>;
    get_role_by_title(dto: RoleDTO): Promise<Role>;
    create_new_role(roleDTO: RoleDTO): Promise<Role>;
    update_role(id: ObjectId, roleDTO: RoleDTO): Promise<Role>;
    delete_role(id: ObjectId): Promise<void>;
}

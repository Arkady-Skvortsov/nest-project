import { Model, ObjectId } from 'mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { RolesService } from 'src/roles/roles.service';
export declare class UsersService {
    private userModel;
    private rolesService;
    constructor(userModel: Model<UserDocument>, rolesService: RolesService);
    get_all(): Promise<User[]>;
    create_user(userDTO: UserDTO): Promise<User>;
    get_user_by_username(username: string): Promise<User>;
    update_user(id: ObjectId, userDTO: UserDTO): Promise<User>;
    set_role_to_user(id: ObjectId, userDTO: UserDTO): Promise<User>;
    delete_user(id: ObjectId): Promise<ObjectId>;
}

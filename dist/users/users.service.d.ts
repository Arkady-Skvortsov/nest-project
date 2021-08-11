import { Model, ObjectId } from 'mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { RoleDocument } from 'src/roles/schemas/role.schema';
export declare class UsersService {
    private userModel;
    private roleModel;
    constructor(userModel: Model<UserDocument>, roleModel: Model<RoleDocument>);
    get_all(): Promise<User[]>;
    create_user(userDTO: UserDTO): Promise<User>;
    get_current_user(id: ObjectId): Promise<User>;
    update_user(id: ObjectId, userDTO: UserDTO): Promise<User>;
    delete_user(id: ObjectId): Promise<ObjectId>;
}

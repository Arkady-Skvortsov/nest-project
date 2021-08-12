import { Model, ObjectId } from 'mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    get_all(): Promise<User[]>;
    create_user(userDTO: UserDTO): Promise<User>;
    get_current_user(id: ObjectId): Promise<User>;
    get_user_by_username(username: string): Promise<User>;
    update_user(id: ObjectId, userDTO: UserDTO): Promise<User>;
    delete_user(id: ObjectId): Promise<ObjectId>;
}

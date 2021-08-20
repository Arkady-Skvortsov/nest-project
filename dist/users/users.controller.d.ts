import { ObjectId } from 'mongoose';
import { UsersService } from './users.service';
import { UserDTO } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    get_all(): Promise<User[]>;
    get_current_user(username: string): Promise<User>;
    create_user(dto: UserDTO): Promise<User>;
    update_user(id: ObjectId, dto: UserDTO): Promise<User>;
    set_role_to_user(id: ObjectId, dto: UserDTO): Promise<User>;
    delete_user(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
}

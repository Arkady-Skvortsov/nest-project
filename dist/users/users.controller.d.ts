import { ObjectId } from 'mongoose';
import { UsersService } from './users.service';
import { UserDTO } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    get_all(): Promise<import("./schemas/user.schema").User[]>;
    get_current_user(id: ObjectId): Promise<import("./schemas/user.schema").User>;
    create_user(dto: UserDTO): Promise<import("./schemas/user.schema").User>;
    update_user(id: ObjectId, dto: UserDTO): Promise<import("./schemas/user.schema").User>;
    delete_user(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
}

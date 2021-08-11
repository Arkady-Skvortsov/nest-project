import { UsersService } from './users.service';
import { UserDTO } from './dto/create-user.dto';
import { ObjectId } from 'mongoose';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    get_all(res: any, req: any): Promise<import("./schemas/user.schema").User[]>;
    create_user(dto: UserDTO): Promise<import("./schemas/user.schema").User>;
    get_current_user(id: ObjectId): Promise<import("./schemas/user.schema").User>;
}

import { UserDTO } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDTO: UserDTO): Promise<import("../users/schemas/user.schema").User>;
    registration(userDTO: UserDTO): Promise<{
        token: string;
    }>;
}

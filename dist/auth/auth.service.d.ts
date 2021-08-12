import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDTO: UserDTO): Promise<{
        token: string;
    }>;
    registration(userDTO: UserDTO): Promise<void>;
    private generate_token;
    private verify_token;
}

import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDTO: UserDTO) {
    const user = await this.verify_token(userDTO);
    return this.generate_token(user);
  }

  async registration(userDTO: UserDTO) {
    const user = await this.userService.get_user_by_username(userDTO.username);

    if (user)
      throw new HttpException(
        'Такой пользователь уже зарегистрирован',
        HttpStatus.BAD_REQUEST,
      );

    const hash_password = await bcrypt.hashSync(userDTO.password, 5);

    const new_user = await this.userService.create_user({
      ...userDTO,
      password: hash_password,
    });

    await this.generate_token(new_user);
  }

  private async generate_token(userDTO: UserDTO) {
    const ready_token = {
      username: userDTO.username,
      login: userDTO.login,
    };

    return {
      token: this.jwtService.sign(ready_token),
    };
  }

  private async verify_token(userDTO: UserDTO) {
    const user = await this.userService.get_user_by_username(userDTO.username);
    const password_eq = await bcrypt.compare(userDTO.password, user.password);

    if (!user && !password_eq) {
      throw new UnauthorizedException({
        message: 'Неверный username или пароль',
      });
    }

    return user;
  }
}

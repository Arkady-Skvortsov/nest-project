import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDTO: UserDTO) {
    return this.validate_user(userDTO);

    //return this.generate_token(new_user);
  }

  async registration(userDTO: UserDTO) {
    const user = await this.userService.get_user_by_username(userDTO.username);

    if (user)
      throw new HttpException(
        'Такой пользователь уже зарегистрирован',
        HttpStatus.BAD_REQUEST,
      );

    const token = await this.userService.create_user(userDTO);

    return this.generate_token(token);
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

  private async validate_user(userDTO: UserDTO) {
    const user = await this.userService.get_user_by_username(userDTO.username);

    if (!user)
      throw new UnauthorizedException({
        message: 'Такого пользователя не существует',
      });

    // if (!user || userDTO.password !== user.password) {
    //   throw new UnauthorizedException({
    //     message: 'Неверный username или пароль',
    //   });
    // }

    return user;
  }
}

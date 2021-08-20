import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDTO: UserDTO) {
    try {
      const log_user = await this.validate_user(userDTO);

      return this.generate_token(log_user);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(userDTO: UserDTO) {
    try {
      const user = await this.userService.get_user_by_username(
        userDTO.username,
      );

      if (user)
        throw new HttpException(
          'Такой пользователь уже зарегистрирован',
          HttpStatus.FORBIDDEN,
        );

      const hash_password = await bcrypt.hashSync(userDTO.password, 3);

      const new_user = await this.userService.create_user({
        ...userDTO,
        password: hash_password,
      });

      return this.generate_token(new_user);
    } catch (e) {
      console.log(e);
      throw new HttpException(
        'Такой пользователь уже зарегистрирован',
        HttpStatus.FORBIDDEN,
      );
    }
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
    try {
      const user = await this.userService.get_user_by_username(
        userDTO.username,
      );

      if (!user)
        throw new UnauthorizedException({
          message: 'Такой пользователь не зарегистрирован',
        });

      return user;
    } catch (e) {
      throw new HttpException(
        'Такой пользователь не зарегистрирован',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}

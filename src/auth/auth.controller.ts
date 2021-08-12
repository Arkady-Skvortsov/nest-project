import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() userDTO: UserDTO) {
    return this.authService.login(userDTO);
  }

  @Post('/registration')
  async registration(@Body() userDTO: UserDTO) {
    return this.authService.registration(userDTO);
  }
}

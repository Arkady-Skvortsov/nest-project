import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/users/dto/create-user.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@ApiTags('Authentication/Authorization')
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

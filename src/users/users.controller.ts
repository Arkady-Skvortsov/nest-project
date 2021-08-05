import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Body,
} from '@nestjs/common';
import { UserDTO } from 'src/models/users/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  get_simple() {
    return this.userService.get_simple();
  }

  @Get('/current')
  get_current_user() {
    return 'get current user';
  }

  @Post('/create')
  async create_user(@Body() dto: UserDTO) {
    await this.userService.create_user(dto);
  }

  @Put('/change_user_information')
  update_user() {
    return 'update user information';
  }

  @Delete()
  delete_user() {
    return 'delete current user';
  }
}

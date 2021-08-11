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
import { UsersService } from './users.service';
import { UserDTO } from './dto/create-user.dto';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async get_all() {
    return this.usersService.get_all();
  }

  @Get(':id')
  async get_current_user(@Param('id') id: ObjectId) {
    return this.usersService.get_current_user(id);
  }

  @Post('/create')
  async create_user(@Body() dto: UserDTO) {
    return this.usersService.create_user(dto);
  }

  @Post(':id')
  async update_user(@Param('id') id: ObjectId, @Body() dto: UserDTO) {
    return this.usersService.update_user(id, dto);
  }

  @Delete('/delete/:id')
  async delete_user(@Param('id') id: ObjectId) {
    return this.usersService.delete_user(id);
  }
}

import { ObjectId } from 'mongoose';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users, which have' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Get()
  async get_all() {
    return this.usersService.get_all();
  }

  @ApiOperation({ summary: 'Get current user by id' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  async get_current_user(@Param('id') id: ObjectId) {
    return this.usersService.get_current_user(id);
  }

  @ApiOperation({ summary: 'Create the user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/create')
  async create_user(@Body() dto: UserDTO) {
    return this.usersService.create_user(dto);
  }

  @ApiOperation({ summary: 'Update the user by him (personal) id' })
  @ApiResponse({ status: 200, type: User })
  @Put('/update/:id')
  async update_user(@Param('id') id: ObjectId, @Body() dto: UserDTO) {
    return this.usersService.update_user(id, dto);
  }

  @ApiOperation({ summary: 'Delete the user by him (personal) id' })
  @ApiResponse({ status: 200, type: User })
  @Delete('/delete/:id')
  async delete_user(@Param('id') id: ObjectId) {
    return this.usersService.delete_user(id);
  }
}

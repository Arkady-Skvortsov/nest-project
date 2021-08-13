import { ObjectId } from 'mongoose';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDTO } from './dto/role-create.dto';
import { Role } from './schemas/role.schema';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  async get_all_roles() {
    return this.rolesService.get_all_roles();
  }

  @Get(':id')
  async get_correct_role(@Param() id: ObjectId) {
    return this.rolesService.get_correct_role(id);
  }

  @Post('/create')
  async create_new_role(@Body() roleDTO: RoleDTO) {
    return this.rolesService.create_new_role(roleDTO);
  }

  @Put('/update/:id')
  async update_role(
    @Param('id') id: ObjectId,
    @Body() roleDTO: RoleDTO,
  ): Promise<Role> {
    return this.rolesService.update_role(id, roleDTO);
  }

  @Delete('/delete/:id')
  async delete_role(@Param('id') id: ObjectId) {
    return this.rolesService.delete_role(id);
  }
}

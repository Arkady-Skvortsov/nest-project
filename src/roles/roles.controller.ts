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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './schemas/role.schema';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, type: Role })
  @Get()
  async get_all_roles() {
    return this.rolesService.get_all_roles();
  }

  @ApiOperation({ summary: 'Get current role by id' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':id')
  async get_correct_role(@Param() id: ObjectId) {
    return this.rolesService.get_correct_role(id);
  }

  @ApiOperation({ summary: 'Betta: Gave the role to current user?' })
  @ApiResponse({ status: 404, type: Role })
  @Post('/get_role')
  async get_role_by_title(@Body() dto: RoleDTO) {
    return this.rolesService.get_role_by_title(dto.title);
  }

  @ApiOperation({ summary: 'Create the role' })
  @ApiResponse({ status: 200, type: Role })
  @Post('/create')
  async create_new_role(@Body() roleDTO: RoleDTO) {
    return this.rolesService.create_new_role(roleDTO);
  }

  @ApiOperation({ summary: 'Update the role by him (personal) id' })
  @ApiResponse({ status: 200, type: Role })
  @Put('/update/:id')
  async update_role(@Param('id') id: ObjectId, @Body() roleDTO: RoleDTO) {
    return this.rolesService.update_role(id, roleDTO);
  }

  @ApiOperation({ summary: 'Delete the role by him (personal) id' })
  @ApiResponse({ status: 200, type: Role })
  @Delete('/delete/:id')
  async delete_role(@Param('id') id: ObjectId) {
    return this.rolesService.delete_role(id);
  }
}

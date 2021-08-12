import { Model, ObjectId } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { RoleDTO } from './dto/role-create.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async get_all_roles(): Promise<Role[]> {
    try {
      const all_roles = await this.roleModel.find();

      return all_roles;
    } catch (e) {
      throw e;
    }
  }

  async create_new_role(roleDTO: RoleDTO): Promise<Role> {
    try {
      const new_role = await this.roleModel.create(roleDTO);

      return new_role;
    } catch (e) {
      throw e;
    }
  }

  async delete_role(id: ObjectId) {
    try {
      await this.roleModel.findByIdAndDelete(id);
    } catch (e) {
      throw e;
    }
  }

  async update_role(id: ObjectId, roleDTO: RoleDTO): Promise<Role> {
    try {
      const update_role = await this.roleModel.findByIdAndUpdate(id, roleDTO);

      update_role.save();

      return update_role;
    } catch (e) {
      throw e;
    }
  }
}

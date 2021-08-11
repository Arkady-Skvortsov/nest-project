import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { RoleDTO } from './dto/role-create.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async get_all_roles(): Promise<Role[]> {
    const all_roles = await this.roleModel.find();

    return all_roles;
  }

  async create_new_role(roleDTO: RoleDTO): Promise<Role> {
    const new_role = await this.roleModel.create(roleDTO);

    return new_role;
  }

  async delete_role(id: ObjectId) {
    await this.roleModel.findByIdAndDelete(id);
  }

  async update_role(id: ObjectId, roleDTO: RoleDTO): Promise<Role> {
    const update_role = await this.roleModel.findByIdAndUpdate(id, roleDTO);

    return update_role;
  }
}

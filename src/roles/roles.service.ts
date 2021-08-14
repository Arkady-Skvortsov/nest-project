import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
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

  async get_correct_role(id: ObjectId): Promise<Role> {
    try {
      const correct_role = await this.roleModel.findById(id);

      return correct_role;
    } catch (e) {
      throw e;
    }
  }

  async get_role_by_title(title: string): Promise<Role> {
    try {
      const current_role = await this.roleModel.findOne({
        where: { title: title },
        include: { all: true },
      });

      return current_role;
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
      return this.roleModel.findByIdAndUpdate(
        id,
        {
          set: {
            ...roleDTO,
          },
        },
        { upsert: true },
      );
    } catch (e) {
      throw e;
    }
  }
}

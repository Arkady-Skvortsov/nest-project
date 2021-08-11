import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UserInterface } from './interfaces/user.interface';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';
import { RoleDTO } from 'src/roles/dto/role-create.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  async get_all(): Promise<User[]> {
    const all_users = await this.userModel.find();

    return all_users;
  }

  async create_user(userDTO: UserDTO): Promise<User> {
    const create_user = await this.userModel.create(userDTO);

    return create_user;
  }

  async get_current_user(id: ObjectId): Promise<User> {
    const current_user = await this.userModel.findById(id);

    return current_user;
  }

  async update_user(id: ObjectId, userDTO: UserDTO): Promise<User> {
    const update_user = await this.userModel.findByIdAndUpdate(id, userDTO);

    await update_user.save();

    return update_user;
  }

  async delete_user(id: ObjectId): Promise<ObjectId> {
    const delete_user = await this.userModel.findByIdAndDelete(id);

    return delete_user._id;
  }

  async add_role(id: ObjectId, userDTO: UserDTO, roleDTO: RoleDTO) {
    const user = await this.userModel.findById(id);
    await user.updateOne(userDTO);

    await user.save();
  }
}

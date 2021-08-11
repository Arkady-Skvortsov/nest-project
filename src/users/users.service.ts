import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UserInterface } from './interfaces/user.interface';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  async get_all(): Promise<User[]> {
    const all = await this.userModel.find();

    return all;
  }

  async create_user(userDTO: UserDTO): Promise<User> {
    const create = await this.userModel.create(userDTO);

    return create;
  }

  async get_current_user(id: ObjectId): Promise<User> {
    const current = await this.userModel.findById(id);

    return current;
  }

  //Fix it later
  async update_user(id: ObjectId, userDTO: UserDTO): Promise<User> {
    const update = await this.userModel.findByIdAndUpdate(id, userDTO);

    return update;
  }

  async delete_user(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findByIdAndDelete();

    return user._id;
  }
}

import { Model, ObjectId } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { HttpException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async get_all(): Promise<User[]> {
    try {
      const all_users = await this.userModel.find();

      return all_users;
    } catch (e) {
      throw e;
    }
  }

  async create_user(userDTO: UserDTO): Promise<User> {
    try {
      const create_user = await this.userModel.create(userDTO);

      return create_user;
    } catch (e) {
      throw e;
    }
  }

  async get_current_user(id: ObjectId): Promise<User> {
    try {
      const current_user = await this.userModel.findById(id);

      return current_user;
    } catch (e) {
      throw e;
    }
  }

  async get_user_by_username(username: string): Promise<User> {
    try {
      const username_user = await this.userModel.findOne({
        username: username,
        include: { all: true },
      });

      return username_user;
    } catch (e) {
      throw e;
    }
  }

  async update_user(id: ObjectId, userDTO: UserDTO): Promise<User> {
    try {
      const update_user = await this.userModel.findByIdAndUpdate(id, userDTO);

      return update_user;
    } catch (e) {
      throw new HttpException(
        'Нельзя обновить пользователя с таким id',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // async give_role_to_user(id: ObjectId, username: string) {
  //   try {
  //     const current_user = await this.userModel.findById(id);

  //     current_user.role.push(current_role);

  //     return current_role;
  //   } catch (e) {
  //     throw new HttpException(
  //       'Нельзя дать пользователю такую роль!',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  // }

  async delete_user(id: ObjectId): Promise<ObjectId> {
    try {
      const delete_user = await this.userModel.findByIdAndDelete(id);

      return delete_user._id;
    } catch (e) {
      throw new HttpException(
        'Нельзя удалить пользователя с таким Id',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

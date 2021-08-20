import { Model, ObjectId } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private rolesService: RolesService,
  ) {}

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
      const create_user = await this.userModel.create({
        ...userDTO,
      });

      const default_role = await this.rolesService.get_role_by_title('User');

      await create_user.$set('roles', [default_role]);

      return create_user;
    } catch (e) {
      throw e;
    }
  }

  async get_user_by_username(username: string): Promise<User> {
    try {
      const username_user = await this.userModel.findOne({
        where: { username: username },
        include: { all: true },
      });

      return username_user;
    } catch (e) {
      throw e;
    }
  }

  async update_user(id: ObjectId, userDTO: UserDTO): Promise<User> {
    try {
      const user = await this.userModel.findOneAndUpdate({ _id: id }, userDTO, {
        upsert: true,
        new: true,
      });

      return user;
    } catch (e) {
      throw new HttpException(
        'Нельзя обновить пользователя с таким id',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async set_role_to_user(id: ObjectId, userDTO: UserDTO): Promise<User> {
    try {
      const user = await this.userModel.findById(id);

      return user;
    } catch (e) {
      throw new HttpException(
        'Нельзя выдать роль этому пользователю',
        HttpStatus.FORBIDDEN,
      );
    }
  }

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

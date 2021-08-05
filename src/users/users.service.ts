import { Injectable, Inject } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/models/users/dto/create-user.dto';
import { TreeRepository } from 'typeorm';
import { User } from '../models/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: TreeRepository<User>,
  ) {}

  async get_simple() {
    const user = await this.userRepository.find();

    return user;
  }

  async get_current_user() {
    // const users = await this.userRepository.findAll();
  }

  async create_user(dto: UserDTO) {
    const create = await this.userRepository.create(dto);

    return create;
  }

  async update_user() {}

  async delete_user() {}
}

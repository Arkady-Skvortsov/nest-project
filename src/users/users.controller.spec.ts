import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).not.toBeUndefined();
  });

  // describe('Request methods of UserController', () => {
  //   it('Get all users', () => {
  //     expect(controller.users).toBeInstanceOf(Array);
  //   });
  // });
});

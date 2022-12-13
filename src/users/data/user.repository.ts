import { Injectable } from '@nestjs/common';
import { User } from '../model/user.model';
import { IUserRepository } from '../repository/user.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findUserByUsername(username: string): Promise<User> {
    return await this.users.find((user) => user.username === username);
  }
}

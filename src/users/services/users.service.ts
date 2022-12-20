import { Inject, Injectable } from '@nestjs/common';
import { User } from '../model/user.model';
import { IUserRepository, USER_REPOSITORY } from '../repository/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private _userRepository: IUserRepository,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await {
      ...(await this._userRepository.findUserByUsername(username)),
    };
  }

  async create(user: User): Promise<User | undefined> {
    return await this._userRepository.create(user);
  }
}

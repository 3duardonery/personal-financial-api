import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, USER_REPOSITORY } from '../repository/user.interface';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private _userRepository: IUserRepository,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this._userRepository.findUserByUsername(username);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { User } from '../model/user.model';
import { IUserRepository, USER_REPOSITORY } from '../repository/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private _userRepository: IUserRepository,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return await this._userRepository.findUserByUsername(username);
  }

  async create(user: User): Promise<User | undefined> {
    return await this._userRepository.create({
      ...user,
      password: await this.createHash(user.password),
    });
  }

  private async createHash(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }
}

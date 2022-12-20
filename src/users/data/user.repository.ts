import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../repository/user.interface';
import { User, UserDocument } from '../schemas/user.schema';

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

  constructor(
    @InjectModel(User.name)
    private readonly _userRepository: Model<UserDocument>,
  ) {}

  async findUserByUsername(username: string): Promise<User> {
    return await this._userRepository.findOne({ username: username }).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../repository/user.interface';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly _userRepository: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<User> {
    return await new this._userRepository({
      ...user,
      updatedAt: new Date(),
    }).save();
  }

  async findUserByUsername(username: string): Promise<User> {
    return await this._userRepository.findOne({ username: username }).exec();
  }
}

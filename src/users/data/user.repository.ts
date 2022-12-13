import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repository/user.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  public async greet(name: string): Promise<string> {
    return `Hey, how's it goin' ${name}?`;
  }
}

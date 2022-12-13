import { User } from '../model/user.model';

export const USER_REPOSITORY = 'USER INTERFACE REPOSITORY';

export interface IUserRepository {
  greet(name: string): Promise<string>;
  findUserByUsername(username: string): Promise<User>;
}

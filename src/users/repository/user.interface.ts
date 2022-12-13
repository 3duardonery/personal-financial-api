import { User } from '../model/user.model';

export const USER_REPOSITORY = 'USER INTERFACE REPOSITORY';

export interface IUserRepository {
  findUserByUsername(username: string): Promise<User>;
}

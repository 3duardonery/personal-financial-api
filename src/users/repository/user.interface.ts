import { User } from '../schemas/user.schema';

export const USER_REPOSITORY = 'USER INTERFACE REPOSITORY';

export interface IUserRepository {
  findUserByUsername(username: string): Promise<User>;
}

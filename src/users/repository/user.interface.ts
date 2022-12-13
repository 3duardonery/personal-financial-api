export const USER_REPOSITORY = 'USER INTERFACE REPOSITORY';

export interface IUserRepository {
  greet(name: string): Promise<string>;
}

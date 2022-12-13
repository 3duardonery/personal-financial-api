import { Module } from '@nestjs/common';
import { UserRepository } from './data/user.repository';
import { USER_REPOSITORY } from './repository/user.interface';
import { UsersService } from './services/users.service';

@Module({
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}

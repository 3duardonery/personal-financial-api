import { Module } from '@nestjs/common';
import { UserRepository } from './data/user.repository';
import { USER_REPOSITORY } from './repository/user.interface';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  exports: [UsersService],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      useClass: UserRepository,
      provide: USER_REPOSITORY,
    },
  ],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UserRepository } from './data/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_REPOSITORY } from './repository/user.interface';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { User } from './model/user.model';
import { UserSchema } from './schemas/user.schema';

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
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}

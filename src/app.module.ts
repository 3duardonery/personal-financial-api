import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserRepository } from './users/data/user.repository';
import { USER_REPOSITORY } from './users/repository/user.interface';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      useClass: UserRepository,
      provide: USER_REPOSITORY,
    },
  ],
})
export class AppModule {}

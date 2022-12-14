import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.CONNECTION}/${process.env.DATABASE}`),
    BillsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

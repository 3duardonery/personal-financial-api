import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/model/user.model';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(username);

    if (user && bcrypt.compare(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user: payload,
    };
  }
}

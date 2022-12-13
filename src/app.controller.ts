import { Controller, Get, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { LocalAuthGuard } from 'src/auth/local-auth-guard';
import { AuthService } from 'src/auth/services/auth.service';
import {
  IUserRepository,
  USER_REPOSITORY,
} from './users/repository/user.interface';

@Controller()
export class AppController {
  constructor(
    @Inject(USER_REPOSITORY)
    private _userRepository: IUserRepository,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Get('api/get')
  getByRepo(@Req() req) {
    return this._userRepository.greet('Eduardo');
  }
}

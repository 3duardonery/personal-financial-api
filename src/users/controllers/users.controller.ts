import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { UsersService } from '../services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getByRepo(@Req() req) {
    return '';
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}

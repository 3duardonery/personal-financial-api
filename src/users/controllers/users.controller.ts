import { Controller, Get, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { Body, Res } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { User } from '../model/user.model';
import { Response } from 'express';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Post('create')
  async createNewUser(@Body() user: User, @Res() response: Response) {
    const result = await this.userService.create(user);
    return response.json(result).send();
  }
}

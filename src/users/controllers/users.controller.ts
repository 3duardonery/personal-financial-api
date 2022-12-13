import { Controller, Get, Inject, Req } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getByRepo(@Req() req) {
    return '';
  }
}

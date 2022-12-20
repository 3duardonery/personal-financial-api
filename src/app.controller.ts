import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { LocalAuthGuard } from 'src/auth/local-auth-guard';
import { AuthService } from 'src/auth/services/auth.service';

@Controller()
export class AppController {}

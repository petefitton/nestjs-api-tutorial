import { Controller, Get, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

type UserResponse = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  hash: undefined;
  firstName: string | null;
  lastName: string | null;
}

@Controller('users')
export class UserController {
  // /users/me
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() expUser: Express.User) {
    const user = expUser as UserResponse;
    delete user.hash;
    return user;
  }
}

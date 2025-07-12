import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

type UserResponse = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  hash: undefined;
  firstName: string | null;
  lastName: string | null;
};

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // /users/me
  @Get('me')
  getMe(@GetUser() expUser: Express.User) {
    const user = expUser as UserResponse;
    delete user.hash;
    return user;
  }

  @Patch()
  async editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    const user = await this.userService.editUser(userId, dto);
    const cleanedUser = {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return cleanedUser;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { UserInfo } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  newUserInfo(user: User) {
    const userInfo: UserInfo = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return userInfo;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}

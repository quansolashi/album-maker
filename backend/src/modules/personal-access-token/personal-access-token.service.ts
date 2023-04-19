import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PersonalAccessToken, Prisma } from '@prisma/client';

@Injectable()
export class PersonalAccessTokenService {
  constructor(private prismaService: PrismaService) {}

  async createPersonalAccessToken(
    data: Prisma.PersonalAccessTokenCreateInput,
  ): Promise<PersonalAccessToken | undefined> {
    return this.prismaService.personalAccessToken.create({
      data,
    });
  }
}

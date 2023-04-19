import { Module } from '@nestjs/common';
import { PersonalAccessTokenService } from './personal-access-token.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PersonalAccessTokenService],
  exports: [PersonalAccessTokenService],
})
export class PersonalAccessTokenModule {}

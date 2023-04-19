import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule } from '@nestjs/config';
import { PersonalAccessTokenModule } from '../personal-access-token/personal-access-token.module';
import tokenConfig from 'src/config/token.config';

@Module({
  imports: [
    UserModule,
    JwtModule.register({}),
    ConfigModule.forFeature(tokenConfig),
    PersonalAccessTokenModule,
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

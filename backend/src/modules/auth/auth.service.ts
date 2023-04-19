import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from '../user/interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
import { Tokens } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserInfo> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return null;
    }

    return this.userService.newUserInfo(user);
  }

  async createTokens(user: UserInfo): Promise<Tokens> {
    const expiresIn = this.configService.get<string>('token.expires_in');
    const accessTokenSecret = this.configService.get<string>('token.jwt_at');
    const refreshTokenSecret = this.configService.get<string>('token.jwt_rt');

    const payload = { email: user.email, sub: user.id };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: accessTokenSecret,
        expiresIn,
      }),
      this.jwtService.signAsync(payload, {
        secret: refreshTokenSecret,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}

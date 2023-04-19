import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PersonalAccessTokenService } from 'src/modules/personal-access-token/personal-access-token.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private authService: AuthService,
    private personalAccessTokenService: PersonalAccessTokenService,
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException(
        `Wrong password for user with email: ${email}`,
      );
    }

    const tokens = await this.authService.createTokens(user);

    const now = new Date();
    const expiredAt = new Date(now.getTime() + 60 * 60 * 1000);

    await this.personalAccessTokenService.createPersonalAccessToken({
      ...tokens,
      expiredAt,
      user: {
        connect: {
          id: user.id,
        },
      },
    });

    return {
      ...user,
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken,
    };
  }
}

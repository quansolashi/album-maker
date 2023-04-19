import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonalAccessTokenModule } from './modules/personal-access-token/personal-access-token.module';
import tokenConfig from './config/token.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, tokenConfig],
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    PersonalAccessTokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

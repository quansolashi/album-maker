import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const port = configService.get<string>('app.port');

  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(port);
}
bootstrap();

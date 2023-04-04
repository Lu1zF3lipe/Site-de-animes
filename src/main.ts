import { NestFactory } from '@nestjs/core';
import { AnimesModule } from './animes.module';

async function bootstrap() {
  const app = await NestFactory.create(AnimesModule);
  await app.listen(3000);
}
bootstrap();

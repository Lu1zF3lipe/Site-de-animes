import { NestFactory } from '@nestjs/core';
import { AnimesModule } from './animes.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AnimesModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (err) => {
        console.log("ERROR", err);
        return new HttpException(
        'Dados obrigatorios não informados ou invalidos',
        HttpStatus.BAD_REQUEST,
      );
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (err) => {
        console.log('ERROR', err);
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

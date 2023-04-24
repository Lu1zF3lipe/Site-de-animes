import { Module } from '@nestjs/common';
import { prismaModule } from './infrastructure/database/prisma.module';
import { GenreComtroller } from './Animes/controllers/genre.controller';
import { GenreService } from './domain/services/genre.service';
import { GenreDataRepository } from './infrastructure/repositories/genre-data.repository';

@Module({
  imports: [prismaModule],
  controllers: [GenreComtroller],
  providers: [GenreService, GenreDataRepository],
})
export class GenreModule {}

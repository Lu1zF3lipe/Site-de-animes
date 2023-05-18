import { Module } from '@nestjs/common';
import { AnimesService } from './domain/services/animes.service';
import { AnimesComtroller } from './Animes/controllers/animes.controller';
import { prismaModule } from './infrastructure/database/prisma.module';
import { AnimesDataRepository } from './infrastructure/repositories/animes-data.repository';
import { GenreDataRepository } from './infrastructure/repositories/genre-data.repository';

@Module({
  imports: [prismaModule],
  controllers: [AnimesComtroller],
  providers: [AnimesService, AnimesDataRepository, GenreDataRepository],
})
export class AnimesModule {}

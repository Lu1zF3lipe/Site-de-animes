import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.providers';
import { createAnimeDTO } from 'src/Animes/dto/create-anime.dto';
import { Animes } from '../animes.models';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AnimesDataRepository {
  constructor(private prisma: PrismaProvider) {}

  async create({
    name,
    relase_date,
    descrition,
    avaliation,
    author,
    genre_id,
  }: createAnimeDTO): Promise<Animes> {
    const createdAnime = await this.prisma.animes.create({
      data: {
        name,
        relase_date,
        descrition,
        avaliation,
        author,
        genre_id,
      },
    });

    return plainToInstance(Animes, createdAnime);
  }
}

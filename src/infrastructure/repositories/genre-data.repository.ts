import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.providers';
import { plainToInstance } from 'class-transformer';
import { Genre } from '../Genre.models';
import { createGenreDTO } from 'src/Animes/dto/create-genre.dto';

@Injectable()
export class GenreDataRepository {
  constructor(private prisma: PrismaProvider) {}

  async create({ name }: createGenreDTO): Promise<Genre> {
    const createGenre = await this.prisma.genre.create({
      data: {
        name,
      },
    });

    return plainToInstance(Genre, createGenre);
  }
}

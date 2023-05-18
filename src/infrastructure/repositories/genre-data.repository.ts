import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.providers';
import { plainToInstance } from 'class-transformer';
import { Genre } from '../Genre.models';
import { createGenreDTO } from 'src/Animes/dto/genreDTO/create-genre.dto';
import { UpdateGenreDTO } from 'src/Animes/dto/genreDTO/update-genre.dto';
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

  async findAll(): Promise<Genre[]> {
    const genres = await this.prisma.genre.findMany();
    return plainToInstance(Genre, genres);
  }

  async findById(id): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({
      where: { id },
    });
    return plainToInstance(Genre, genre);
  }

  async update(id: number, { name }: UpdateGenreDTO): Promise<Genre> {
    const updatedGenre = await this.prisma.genre.update({
      data: {
        name,
      },
      where: { id },
    });

    return plainToInstance(Genre, updatedGenre);
  }
}

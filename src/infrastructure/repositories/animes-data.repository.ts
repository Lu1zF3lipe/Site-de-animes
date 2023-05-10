import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../database/prisma.providers';
import { createAnimeDTO } from 'src/Animes/dto/animesDTO/create-anime.dto';
import { Animes } from '../animes.models';
import { plainToInstance } from 'class-transformer';
import { FindByNameDTO } from 'src/Animes/dto/animesDTO/find-by-name.dto';
import { updateAnimeDTO } from 'src/Animes/dto/update-anime.dto';
import { promises } from 'dns';

@Injectable()
export class AnimesDataRepository {
  constructor(private prisma: PrismaProvider) {}

  async create({
    name,
    release_date,
    descrition,
    avaliation,
    author,
    genre_id,
  }: createAnimeDTO): Promise<Animes> {
    const createdAnime = await this.prisma.animes.create({
      data: {
        name,
        release_date,
        descrition,
        avaliation,
        author,
        genre_id,
      },
    });

    return plainToInstance(Animes, createdAnime);
  }

  async findByName({ name }: FindByNameDTO): Promise<Animes[]> {
    const findByName = await this.prisma.animes.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    return plainToInstance(Animes, findByName);
  }

  async findById(id: number): Promise<Animes> {
    const findById = await this.prisma.animes.findUnique({
      where: { id },
    });

    return findById;
  }

  async update(
    id: number,
    {
      name,
      release_date,
      descrition,
      avaliation,
      author,
      genre_id,
    }: updateAnimeDTO,
  ): Promise<Animes> {
    const updatedAnime = await this.prisma.animes.update({
      data: {
        name,
        release_date,
        descrition,
        avaliation,
        author,
        genre_id,
      },
      where: { id },
    });

    return plainToInstance(Animes, updatedAnime);
  }

  async delete(id: number): Promise<Animes> {
    const deletedUser = await this.prisma.animes.delete({
      where: { id }
    })

    return plainToInstance(Animes, deletedUser);
  }
}

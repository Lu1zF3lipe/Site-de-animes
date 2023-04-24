/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { createGenreDTO } from 'src/Animes/dto/create-genre.dto';
import { GenreDataRepository } from 'src/infrastructure/repositories/genre-data.repository';

@Injectable()
export class GenreService {
  constructor(private readonly GenreDataRepository: GenreDataRepository) {}

  public async createGenre(create: createGenreDTO) {
    const genre = await this.GenreDataRepository.create(create);
    return genre;
  }
}

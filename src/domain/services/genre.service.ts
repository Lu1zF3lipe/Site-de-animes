/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createGenreDTO } from 'src/Animes/dto/genreDTO/create-genre.dto';
import { UpdateGenreDTO } from 'src/Animes/dto/genreDTO/update-genre.dto';
import { GenreDataRepository } from 'src/infrastructure/repositories/genre-data.repository';

@Injectable()
export class GenreService {
  constructor(private readonly GenreDataRepository: GenreDataRepository) {}

  public async createGenre(create: createGenreDTO) {
    const genre = await this.GenreDataRepository.create(create);
    return genre;
  }

  public async findAll() {
    const genres = await this.GenreDataRepository.findAll();
    return genres;
  }

  public async update(id: number, updateGenre: UpdateGenreDTO) {
    if (id) {
      const animeExist = await this.GenreDataRepository.findById(id);
      if (!animeExist) {
        throw new HttpException(
          'Nenhum anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    const updatedGenre = await this.GenreDataRepository.update(id, updateGenre);
    return updatedGenre;
  }
}

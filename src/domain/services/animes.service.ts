/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createAnimeDTO } from 'src/Animes/dto/animesDTO/create-anime.dto';
import { FindAnimesByGenreDTO } from 'src/Animes/dto/animesDTO/find-animes-by-genre.dto';
import { FindByNameDTO } from 'src/Animes/dto/animesDTO/find-by-name.dto';
import { updateAnimeDTO } from 'src/Animes/dto/animesDTO/update-anime.dto';
import { AnimesDataRepository } from 'src/infrastructure/repositories/animes-data.repository';
import { GenreDataRepository } from 'src/infrastructure/repositories/genre-data.repository';

@Injectable()
export class AnimesService {
  constructor(
    private readonly AnimesDataRepository: AnimesDataRepository,
    private readonly GenreDataRepository: GenreDataRepository,
  ) {}

  public async create(create: createAnimeDTO) {
    const genreExist = await this.GenreDataRepository.findById(create.genre_id);
    if (!genreExist) {
      throw new HttpException(
        'Nenhum genero foi encontrado. certifique-se de escolher um genro vailido!',
        HttpStatus.NOT_FOUND,
      );
    }
    const anime = await this.AnimesDataRepository.create(create);
    return anime;
  }

  public async findByName(findByName: FindByNameDTO) {
    const animes = await this.AnimesDataRepository.findByName(findByName);
    if (animes.length === 0) {
      throw new HttpException(
        'Nenhum Anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
        HttpStatus.NOT_FOUND,
      );
    }
    return animes;
  }

  public async findAnimesByGenre(findAnimesByGenre: FindAnimesByGenreDTO) {
    const animes = await this.AnimesDataRepository.findAnimesByGenre(
      findAnimesByGenre,
    );
    if (animes.length === 0) {
      throw new HttpException(
        'Nenhum Anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
        HttpStatus.NOT_FOUND,
      );
    }

    return animes;
  }

  public async findById(id: number) {
    const anime = await this.AnimesDataRepository.findById(id);
    if (!anime) {
      throw new HttpException(
        'Nenhum anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
        HttpStatus.NOT_FOUND,
      );
    }
    return anime;
  }

  public async update(id: number, updateAnime: updateAnimeDTO) {
    const genreExist = await this.GenreDataRepository.findById(
      updateAnime.genre_id,
    );
    if (!genreExist) {
      throw new HttpException(
        'Nenhum genero foi encontrado. certifique-se de escolher um genro vailido!',
        HttpStatus.NOT_FOUND,
      );
    }
    if (id) {
      const animeExist = await this.AnimesDataRepository.findById(id);
      if (!animeExist) {
        throw new HttpException(
          'Nenhum anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
          HttpStatus.NOT_FOUND,
        );
      }
    }
    const updatedAnime = await this.AnimesDataRepository.update(
      id,
      updateAnime,
    );

    return updatedAnime;
  }

  public async delete(id: number) {
    if (id) {
      const animeExist = await this.AnimesDataRepository.findById(id);
      if (!animeExist) {
        throw new HttpException(
          'Nenhum anime foi encontrado. Favor revisar os critérios da sua pesquisa!',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    const deletedUser = await this.AnimesDataRepository.delete(id);
    return deletedUser;
  }
}

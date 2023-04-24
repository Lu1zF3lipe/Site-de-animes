/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createAnimeDTO } from 'src/Animes/dto/create-anime.dto';
import { FindByNameDTO } from 'src/Animes/dto/find-by-name.dto';
import { updateAnimeDTO } from 'src/Animes/dto/update-anime.dto';
import { AnimesDataRepository } from 'src/infrastructure/repositories/animes-data.repository';

@Injectable()
export class AnimesService {
  constructor(private readonly AnimesDataRepository: AnimesDataRepository) {}

  public async create(create: createAnimeDTO) {
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
}

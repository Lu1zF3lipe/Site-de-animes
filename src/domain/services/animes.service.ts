/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { createAnimeDTO } from 'src/Animes/dto/create-anime.dto';
import { AnimesDataRepository } from 'src/infrastructure/repositories/animes-data.repository';

@Injectable()
export class AnimesService {
  constructor(private readonly AnimesDataRepository: AnimesDataRepository) {}

  public async create(create: createAnimeDTO) {
    const anime = await this.AnimesDataRepository.create(create);
    return anime;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Post, Controller } from '@nestjs/common';
import { createAnimeDTO } from '../dto/create-anime.dto';
import { AnimesService } from 'src/domain/services/animes.service';

@Controller('animes')
export class AnimesComtroller {
  constructor(private readonly AnimesService: AnimesService) {}

  @Post()
  async create(@Body() createAnimeDTO: createAnimeDTO) {
    await this.AnimesService.create(createAnimeDTO);
    return {
      statusCode: 201,
      message: 'Operação realizada com sucesso.',
    };
  }
}

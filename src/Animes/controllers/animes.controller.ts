/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Post,
  Controller,
  Query,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { createAnimeDTO } from '../dto/animesDTO/create-anime.dto';
import { AnimesService } from 'src/domain/services/animes.service';
import { FindByNameDTO } from '../dto/animesDTO/find-by-name.dto';
import { updateAnimeDTO } from '../dto/animesDTO/update-anime.dto';
import { query } from 'express';
import { FindAnimesByGenreDTO } from '../dto/animesDTO/find-animes-by-genre.dto';

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

  @Get()
  async findByName(@Query() findByName: FindByNameDTO) {
    const animes = await this.AnimesService.findByName(findByName);
    return animes;
  }

  @Get('/genre')
  async findAnimesByGenre(@Query() findAnimesByGenre: FindAnimesByGenreDTO) {
    const animes = await this.AnimesService.findAnimesByGenre(
      findAnimesByGenre,
    );
    return animes;
  }

  @Get('/:id')
  async findById(@Param('id', new ParseIntPipe()) id: number) {
    const anime = await this.AnimesService.findById(id);
    return anime;
  }

  @Patch('/:id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateAnime: updateAnimeDTO,
  ) {
    await this.AnimesService.update(id, updateAnime);
    return {
      statusCode: 200,
      message: 'Operação realizada com sucesso.',
    };
  }

  @HttpCode(204)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    await this.AnimesService.delete(id);
  }
}

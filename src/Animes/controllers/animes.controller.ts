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
} from '@nestjs/common';
import { createAnimeDTO } from '../dto/create-anime.dto';
import { AnimesService } from 'src/domain/services/animes.service';
import { FindByNameDTO } from '../dto/find-by-name.dto';
import { updateAnimeDTO } from '../dto/update-anime.dto';

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
}

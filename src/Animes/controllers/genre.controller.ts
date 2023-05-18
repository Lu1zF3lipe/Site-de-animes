/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Post,
  Controller,
  Get,
  Patch,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { GenreService } from 'src/domain/services/genre.service';
import { UpdateGenreDTO } from '../dto/genreDTO/update-genre.dto';
import { createGenreDTO } from '../dto/genreDTO/create-genre.dto';

@Controller('genre')
export class GenreComtroller {
  constructor(private readonly GenreService: GenreService) {}

  @Post()
  async createGenre(@Body() createGenreDTO: createGenreDTO) {
    await this.GenreService.createGenre(createGenreDTO);
    return {
      statusCode: 201,
      message: 'Operação realizada com sucesso.',
    };
  }

  @Get()
  async findAll() {
    const genres = await this.GenreService.findAll();
    return genres;
  }

  @Patch('/:id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateGenre: UpdateGenreDTO,
  ) {
    await this.GenreService.update(id, updateGenre);
    return {
      statusCode: 200,
      message: 'Operação realizada com sucesso.',
    };
  }
}

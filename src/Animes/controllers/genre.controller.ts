/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Post, Controller } from '@nestjs/common';
import { createGenreDTO } from '../dto/create-genre.dto';
import { GenreService } from 'src/domain/services/genre.service';

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
}

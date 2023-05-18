import { Exclude, Type } from 'class-transformer';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  IsDate,
  Max,
  Min,
} from 'class-validator';
import { Genre } from './Genre.models';

export class Animes {
  @Exclude({ toPlainOnly: true })
  id: number;

  @IsString()
  @MaxLength(45)
  name: string;

  @IsDate()
  release_date: Date;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descrition?: string;

  @IsOptional()
  @IsNumber()
  @Max(10)
  @Min(1)
  avaliation?: number;

  @IsString()
  @MaxLength(45)
  author: string;

  @Exclude()
  @IsDate()
  created_at: Date;

  @Exclude()
  @IsDate()
  updated_at: Date;

  @Exclude()
  genre_id: number

  @Type(() => Genre)
  genre: Genre;
}

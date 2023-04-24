import { Exclude } from 'class-transformer';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  IsDate,
  Max,
  Min,
} from 'class-validator';

export class Animes {
  @Exclude()
  id: number;

  @IsString()
  @MaxLength(45)
  name: string;

  @IsDate()
  relase_date: Date;

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

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsNumber()
  genre_id: number;
}

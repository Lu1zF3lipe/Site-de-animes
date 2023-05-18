import { IsString, MaxLength } from 'class-validator';

export class FindAnimesByGenreDTO {
  @IsString()
  @MaxLength(45)
  name: string;
}

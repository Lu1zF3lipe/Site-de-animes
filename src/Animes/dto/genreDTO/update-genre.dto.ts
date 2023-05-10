import { IsString, MaxLength } from 'class-validator';

export class UpdateGenreDTO {
  @IsString()
  @MaxLength(45)
  name: string;
}
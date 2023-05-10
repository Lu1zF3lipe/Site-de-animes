import { IsString, MaxLength } from 'class-validator';

export class createGenreDTO {
  @IsString()
  @MaxLength(45)
  name: string;
}

import { IsString, MaxLength } from 'class-validator';

export class Genre {
  @IsString()
  @MaxLength(45)
  name: string;
}

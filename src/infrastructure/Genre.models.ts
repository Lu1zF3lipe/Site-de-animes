import { Exclude } from 'class-transformer';
import { IsNumber, IsString, MaxLength } from 'class-validator';

export class Genre {
  @Exclude()
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(45)
  name: string;
}

import { Exclude } from 'class-transformer';
import { IsNumber, IsString, MaxLength } from 'class-validator';

export class Genre {
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(45)
  name: string;

  @Exclude()
  created_at: Date

  @Exclude()
  updated_at:Date
}

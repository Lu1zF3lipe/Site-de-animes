import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from "class-validator";

export class createAnimeDTO {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsDate()
  @Transform((params)=> new Date(params.value))
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
  @MaxLength(50)
  author: string;

  @IsNumber()
  genre_id: number;
}
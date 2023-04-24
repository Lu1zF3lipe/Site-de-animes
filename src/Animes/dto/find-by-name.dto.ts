import { IsString, MaxLength } from 'class-validator';

export class FindByNameDTO {
  @IsString()
  @MaxLength(45)
  name: string;
}

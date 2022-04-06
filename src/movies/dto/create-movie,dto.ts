import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  readonly;
  @IsString()
  title: string;
  @IsString()
  author: string;
  @IsNumber()
  year: number;
  @IsString({ each: true })
  genres: string[];
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie,dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.movieService.getAllMovies();
  }

  @Get('/search')
  searchMovie(@Query('year') year: string): Movie[] {
    return this.movieService.searchMovie(year);
  }

  @Get('/:id')
  getMovie(@Param('id') id: string): Movie {
    return this.movieService.getMovie(id);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.movieService.createMovie(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(id);
  }

  @Put('/:id') //전체적인 변경
  updateMovie(@Param('id') movieId: string, @Body() movieData: CreateMovieDto) {
    return this.movieService.updateMovie(movieId, movieData);
  }

  @Patch('/:id') //부분적인 변경
  updateMoviePart(@Param('id') movieId: string): string {
    return this.movieService.updateMoviePart(movieId);
  }
}

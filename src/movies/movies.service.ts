import {
  Body,
  Delete,
  Get,
  Injectable,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  getAllMovies(): Movie[] {
    return this.movies;
  }

  searchMovie(year: string): Movie[] {
    return this.movies.filter((v) => v.year >= parseInt(year));
  }

  getMovie(id: string): Movie {
    const movie = this.movies.find((v) => v.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with id: ${id} not found`);
    }
    return movie;
  }

  createMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteMovie(id: string) {
    this.getMovie(id);
    this.movies = this.movies.filter((v) => v.id !== parseInt(id));
  }

  updateMovie(movieId: string, movieData) {
    const movie = this.getMovie(movieId);
    this.deleteMovie(movieId);
    this.movies.push({ ...movie, ...movieData });
  }

  updateMoviePart(movieId: string) {
    return `update part of ${movieId} movie`;
  }
}

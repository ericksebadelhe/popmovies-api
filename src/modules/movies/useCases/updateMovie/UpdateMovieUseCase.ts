import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUpdateMovieDTO } from '../../dtos';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
class UpdateMovieUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({
    id,
    title,
    thumbnail,
    synopsis,
    rating,
    year,
    duration,
    release_date,
    category_id,
  }: IUpdateMovieDTO): Promise<Movie> {
    const movie = await this.moviesRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie does not exists!');
    }

    movie.title = title || movie.title;
    movie.thumbnail = thumbnail || movie.thumbnail;
    movie.synopsis = synopsis || movie.synopsis;
    movie.rating = rating || movie.rating;
    movie.year = year || movie.year;
    movie.duration = duration || movie.duration;
    movie.release_date = release_date || movie.release_date;
    movie.category_id = category_id || movie.category_id;

    await this.moviesRepository.save(movie);

    return movie;
  }
}

export { UpdateMovieUseCase };

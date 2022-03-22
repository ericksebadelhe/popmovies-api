import { inject, injectable } from 'tsyringe';

import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { ICreateMovieDTO } from '../../dtos';
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateMovieUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository
    ) { }

  async execute({
    title,
    thumbnail,
    synopsis,
    rating,
    year,
    duration,
    release_date,
    category_id
  }: ICreateMovieDTO): Promise<Movie> {
    const movieAlreadyExists = await this.moviesRepository.findByTitle(
      title,
    );

    if (movieAlreadyExists) {
      throw new AppError('Movie already exists!');
    }

    const newMovie = await this.moviesRepository.create({
      title,
      thumbnail,
      synopsis,
      rating,
      year,
      duration,
      release_date,
      category_id
    });
    return newMovie;
  }
}

export { CreateMovieUseCase };

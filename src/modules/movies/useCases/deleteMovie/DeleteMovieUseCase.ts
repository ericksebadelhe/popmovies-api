import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IDeleteMovieDTO } from '../../dtos';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
class DeleteMovieUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({ id }: IDeleteMovieDTO): Promise<void> {
    const movie = await this.moviesRepository.findById(id);

    if (!movie) {
      throw new AppError('Movie does not exists!');
    }

    await this.moviesRepository.delete(id);
  }
}

export { DeleteMovieUseCase };

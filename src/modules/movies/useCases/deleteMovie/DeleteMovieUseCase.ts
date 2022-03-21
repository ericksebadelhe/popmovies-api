import { inject, injectable } from 'tsyringe';

import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IDeleteMovieDTO } from '../../dtos';

@injectable()
class DeleteMovieUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository
  ) { }

  async execute({
    id,
  }: IDeleteMovieDTO): Promise<void> {
    const movie = await this.moviesRepository.findById(
      id,
    );

    if (!movie) {
      throw new Error('Movie does not exists!');
    }

    await this.moviesRepository.delete(id);
  }
}

export { DeleteMovieUseCase };

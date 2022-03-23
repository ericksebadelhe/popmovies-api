import { inject, injectable } from 'tsyringe';

import { IGetAllMoviesDTO } from '../../dtos';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
class GetAllMoviesUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute(): Promise<IGetAllMoviesDTO[]> {
    const movies = await this.moviesRepository.getAll();
    return movies;
  }
}

export { GetAllMoviesUseCase };

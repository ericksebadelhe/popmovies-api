import { inject, injectable } from 'tsyringe';

import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IGetAllMoviesDTO } from '../../dtos';

@injectable()
class GetAllMoviesUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository
  ) {}

  async execute(): Promise<IGetAllMoviesDTO[]> {
    const movies = await this.moviesRepository.getAll();
    return movies;
  }
}

export { GetAllMoviesUseCase };

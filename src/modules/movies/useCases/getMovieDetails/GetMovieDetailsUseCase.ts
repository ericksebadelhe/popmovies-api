import { inject, injectable } from 'tsyringe';

import { IMoviesRepository } from '../../repositories/IMoviesRepository';
import { IMovieDetailsDTO } from '../../dtos';

@injectable()
class GetMovieDetailsUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository
  ) {}

  async execute({ id }): Promise<IMovieDetailsDTO> {
    const result = await this.moviesRepository.getDetails(id);

    const movie = {
      ...result,
      rating: Number(result.rating),
      duration: Number(result.duration),
      year: Number(result.year),
      category: result.category.name,
    }

    return movie;
  }
}

export { GetMovieDetailsUseCase };

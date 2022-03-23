import { inject, injectable } from 'tsyringe';

import { IMovieDetailsDTO } from '../../dtos';
import { IMoviesRepository } from '../../repositories/IMoviesRepository';

@injectable()
class GetMovieDetailsUseCase {
  constructor(
    @inject('MoviesRepository')
    private moviesRepository: IMoviesRepository,
  ) {}

  async execute({ id }): Promise<IMovieDetailsDTO> {
    const result = await this.moviesRepository.getDetails(id);

    const movie = {
      ...result,
      rating: Number(result.rating),
      duration: Number(result.duration),
      year: Number(result.year),
      category: result.category.name,
    };

    return movie;
  }
}

export { GetMovieDetailsUseCase };

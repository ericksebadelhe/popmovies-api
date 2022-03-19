import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export class GetMovieDetailsService {
  async execute(movieId: string) {
    const repo = getRepository(Movie);

    const result = await repo.findOne(movieId, {
      relations: ['category'],
    });

    if (!result) {
      return new Error('Movie not found!');
    }

    const movie = {
      ...result,
      category: result.category.name,
    }

    return movie;
  }
}
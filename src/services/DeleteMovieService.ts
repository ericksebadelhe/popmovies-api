import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export class DeleteMovieService {
  async execute(movieId: string) {
    const repo = getRepository(Movie);

    if (!await repo.findOne(movieId)) {
      return new Error('Movie not found!');
    }

    await repo.delete(movieId);

  }
}

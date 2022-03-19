import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

export class GetAllMoviesService {
  async execute() {
    const repo = getRepository(Movie);

    const results = await repo.find({
      relations: ['category'],
    });

    const movies = results.map(res => ({
      id: res.id,
      title: res.title,
      thumbnail: res.thumbnail,
      category: res.category.name,
    }));

    return movies;
  }
}

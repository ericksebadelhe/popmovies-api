import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { Movie } from '../entities/Movie';

type MovieRequest = {
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  duration: number;
  release_date: Date;
  category_id: string;
}

export class CreateMovieService {
  async execute(requestData: MovieRequest): Promise<Movie | Error> {
    const movieRepo = getRepository(Movie);
    const categoryRepo = getRepository(Category);

    if (!await categoryRepo.findOne(requestData.category_id)) {
      return new Error("Movie category not found!");
    }

    const movie = movieRepo.create(requestData);

    await movieRepo.save(movie);

    return movie;
  }
}

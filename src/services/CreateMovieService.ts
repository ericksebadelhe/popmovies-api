import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { Movie } from '../entities/Movie';

type MovieRequest = {
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  release_date: Date;
  category_id: string;
}

export class CreateMovieService {
  async execute({ title, thumbnail, synopsis, rating, year, release_date, category_id }: MovieRequest): Promise<Movie | Error> {
    const movieRepo = getRepository(Movie);
    const categoryRepo = getRepository(Category);

    if (!await categoryRepo.findOne(category_id)) {
      return new Error("Movie category not found!");
    }

    const movie = movieRepo.create({
      title,
      thumbnail,
      synopsis,
      rating,
      year,
      release_date,
      category_id
    });

    await movieRepo.save(movie);

    return movie;
  }
}

import { getRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

type UpdateMovieRequest = {
  id: string;
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  release_date: Date;
  category_id: string;
}

export class UpdateMovieService {
  async execute({
    id,
    title,
    thumbnail,
    synopsis,
    rating,
    year,
    release_date,
    category_id
  }: UpdateMovieRequest) {
    const repo = getRepository(Movie);

    const movie = await repo.findOne(id);

    if (!movie) {
      return new Error("Movie not found!");
    }

    movie.title = title || movie.title;
    movie.thumbnail = thumbnail || movie.thumbnail;
    movie.synopsis = synopsis || movie.synopsis;
    movie.rating = rating || movie.rating;
    movie.year = year || movie.year;
    movie.release_date = release_date || movie.release_date;
    movie.category_id = category_id || movie.category_id;

    await repo.save(movie);

    return movie;
  }
}

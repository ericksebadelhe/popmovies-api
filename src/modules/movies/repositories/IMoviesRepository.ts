import { ICreateMovieDTO, IGetAllMoviesDTO } from '../dtos';
import { Movie } from '../entities/Movie';

interface IMoviesRepository {
  create({
    title,
    thumbnail,
    synopsis,
    rating,
    year,
    duration,
    release_date,
    category_id,
  }: ICreateMovieDTO): Promise<Movie>;
  getAll(): Promise<IGetAllMoviesDTO[]>;
  getDetails(id: string): Promise<Movie | undefined>;
  findById(id: string): Promise<Movie | undefined>;
  findByTitle(title: string): Promise<Movie | undefined>;
  save(movie: Movie): Promise<Movie>;
  delete(id: string): Promise<void>;
}

export { IMoviesRepository };

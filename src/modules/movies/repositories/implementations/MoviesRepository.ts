import { getRepository, Repository } from 'typeorm';

import { ICreateMovieDTO, IGetAllMoviesDTO } from '../../dtos';
import { Movie } from '../../entities/Movie';
import { IMoviesRepository } from '../IMoviesRepository';

class MoviesRepository implements IMoviesRepository {
  private repository: Repository<Movie>;

  constructor() {
    this.repository = getRepository(Movie);
  }

  async create({
    title,
    thumbnail,
    synopsis,
    rating,
    year,
    duration,
    release_date,
    category_id,
  }: ICreateMovieDTO): Promise<Movie> {
    const newMovie = this.repository.create({
      title,
      thumbnail,
      synopsis,
      rating,
      year,
      duration,
      release_date,
      category_id,
      created_at: new Date(),
    });

    this.repository.save(newMovie);

    return newMovie;
  }

  async getAll(): Promise<IGetAllMoviesDTO[]> {
    const results = await this.repository.find({
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

  async getDetails(id: string): Promise<Movie | undefined> {
    const movie = await this.repository.findOne(id, {
      relations: ['category'],
    });
    return movie;
  }

  async findById(id: string): Promise<Movie | undefined> {
    const movie = this.repository.findOne(id);
    return movie;
  }

  async findByTitle(title: string): Promise<Movie | undefined> {
    const movie = this.repository.findOne({
      where: { title },
    });
    return movie;
  }

  async save(movie: Movie): Promise<Movie> {
    return this.repository.save(movie);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { MoviesRepository };

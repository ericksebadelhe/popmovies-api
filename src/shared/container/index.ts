import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/movies/repositories/ICategoriesRepository';
import { IMoviesRepository } from '../../modules/movies/repositories/IMoviesRepository';
import { CategoriesRepository } from '../../modules/movies/repositories/implementations/CategoriesRepository';
import { MoviesRepository } from '../../modules/movies/repositories/implementations/MoviesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IMoviesRepository>(
  'MoviesRepository',
  MoviesRepository,
);

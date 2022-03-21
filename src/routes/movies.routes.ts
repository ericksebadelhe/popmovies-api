import { Router } from 'express';

import { CreateMovieController } from '../modules/movies/useCases/createMovie/CreateMovieController';
import { DeleteMovieController } from '../modules/movies/useCases/deleteMovie/DeleteMovieController';
import { GetAllMoviesController } from '../modules/movies/useCases/getAllMovies/GetAllMoviesController';
import { GetMovieDetailsController } from '../modules/movies/useCases/getMovieDetails/GetMovieDetailsController';
import { UpdateMovieController } from '../modules/movies/useCases/updateMovie/UpdateMovieController';

const moviesRoutes = Router();

moviesRoutes.post('/', new CreateMovieController().handle);
moviesRoutes.get('/', new GetAllMoviesController().handle);
moviesRoutes.get('/:id', new GetMovieDetailsController().handle);
moviesRoutes.put('/:id', new UpdateMovieController().handle);
moviesRoutes.delete('/:id', new DeleteMovieController().handle);

export { moviesRoutes };

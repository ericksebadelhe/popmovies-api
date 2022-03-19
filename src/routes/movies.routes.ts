import { Router } from 'express';

import { CreateMovieController } from '../controllers/CreateMovieController';
import { DeleteMovieController } from '../controllers/DeleteMovieController';
import { GetAllMoviesController } from '../controllers/GetAllMoviesController';
import { GetMovieDetailsController } from '../controllers/GetMovieDetailsController';
import { UpdateMovieController } from '../controllers/UpdateMovieController';

const moviesRoutes = Router();

moviesRoutes.post('/', new CreateMovieController().handle);
moviesRoutes.get('/', new GetAllMoviesController().handle);
moviesRoutes.get('/:id', new GetMovieDetailsController().handle);
moviesRoutes.put('/:id', new UpdateMovieController().handle);
moviesRoutes.delete('/:id', new DeleteMovieController().handle);

export { moviesRoutes };

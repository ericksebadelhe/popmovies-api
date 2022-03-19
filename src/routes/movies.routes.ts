import { Router } from 'express';

import { CreateMovieController } from '../controllers/CreateMovieController';
import { GetAllMoviesController } from '../controllers/GetAllMoviesController';
import { GetMovieDetailsController } from '../controllers/GetMovieDetailsController';

const moviesRoutes = Router();

moviesRoutes.post('/', new CreateMovieController().handle);
moviesRoutes.get('/', new GetAllMoviesController().handle);
moviesRoutes.get('/:id', new GetMovieDetailsController().handle);

export { moviesRoutes };

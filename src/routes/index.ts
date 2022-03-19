import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { moviesRoutes } from './movies.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/movies', moviesRoutes);

export { routes };

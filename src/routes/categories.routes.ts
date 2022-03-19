import { Router } from 'express';

import { CreateCategoryController } from '../controllers/CreateCategoryController';
import { DeleteCategoryController } from '../controllers/DeleteCategoryController.ts';
import { GetAllCategoriesController } from '../controllers/GetAllCategoriesController';
import { UpdateCategoryController } from '../controllers/UpdateCategoryController';

const categoriesRoutes = Router();

categoriesRoutes.post('/', new CreateCategoryController().handle);
categoriesRoutes.get('/', new GetAllCategoriesController().handle);
categoriesRoutes.delete('/:id', new DeleteCategoryController().handle);
categoriesRoutes.put('/:id', new UpdateCategoryController().handle);

export { categoriesRoutes };

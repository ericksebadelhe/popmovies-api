import { Router } from 'express';

import { CreateCategoryController } from '../modules/movies/useCases/createCategory/CreateCategoryController';
import { DeleteCategoryController } from '../modules/movies/useCases/deleteCategory/DeleteCategoryController';
import { GetAllCategoriesController } from '../modules/movies/useCases/getAllCategories/GetAllCategoriesController';
import { UpdateCategoryController } from '../modules/movies/useCases/updateCategory/UpdateCategoryController';

const categoriesRoutes = Router();

categoriesRoutes.post('/', new CreateCategoryController().handle);
categoriesRoutes.get('/', new GetAllCategoriesController().handle);
categoriesRoutes.delete('/:id', new DeleteCategoryController().handle);
categoriesRoutes.put('/:id', new UpdateCategoryController().handle);

export { categoriesRoutes };

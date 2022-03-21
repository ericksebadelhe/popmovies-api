
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetAllCategoriesUseCase } from '../../useCases/getAllCategories/GetAllCategoriesUseCase';

export class GetAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {

    const getAllCategoriesUseCase = container.resolve(GetAllCategoriesUseCase);

    const allCategories = await getAllCategoriesUseCase.execute();

    return response.json(allCategories);
  }
}

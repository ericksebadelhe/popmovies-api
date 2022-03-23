import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    const result = await updateCategoryUseCase.execute({ id, name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

export { UpdateCategoryController };

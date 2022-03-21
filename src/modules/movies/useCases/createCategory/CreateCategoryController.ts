import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const result = await createCategoryUseCase.execute({ name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}

export { CreateCategoryController };

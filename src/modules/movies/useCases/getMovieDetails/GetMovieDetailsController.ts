import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetMovieDetailsUseCase } from './GetMovieDetailsUseCase';

export class GetMovieDetailsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getAllMoviesUseCase = container.resolve(GetMovieDetailsUseCase);

    const result = await getAllMoviesUseCase.execute({ id });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

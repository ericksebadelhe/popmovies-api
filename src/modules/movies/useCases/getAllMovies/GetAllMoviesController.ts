import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetAllMoviesUseCase } from './GetAllMoviesUseCase';

export class GetAllMoviesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllMoviesUseCase = container.resolve(GetAllMoviesUseCase);

    const allMovies = await getAllMoviesUseCase.execute();

    return response.json(allMovies);
  }
}

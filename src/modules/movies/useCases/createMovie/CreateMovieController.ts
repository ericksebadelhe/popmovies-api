import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateMovieUseCase } from './CreateMovieUseCase';

export class CreateMovieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      thumbnail,
      synopsis,
      rating,
      duration,
      year,
      release_date,
      category_id,
    } = request.body;

    const createMovieUseCase = container.resolve(CreateMovieUseCase);

    const result = await createMovieUseCase.execute({
      title,
      thumbnail,
      synopsis,
      rating,
      duration,
      year,
      release_date,
      category_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}

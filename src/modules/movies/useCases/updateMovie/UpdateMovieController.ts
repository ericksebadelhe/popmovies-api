import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateMovieUseCase } from './UpdateMovieUseCase';

export class UpdateMovieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { body } = request;

    const updateMovieUseCase = container.resolve(UpdateMovieUseCase);

    const result = await updateMovieUseCase.execute({ id, ...body });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({
      ...result,
      rating: Number(result.rating),
      duration: Number(result.duration),
      year: Number(result.year),
    });
  }
}

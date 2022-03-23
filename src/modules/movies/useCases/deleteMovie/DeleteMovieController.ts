import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteMovieUseCase } from './DeleteMovieUseCase';

class DeleteMovieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteMovieUseCase = container.resolve(DeleteMovieUseCase);

    await deleteMovieUseCase.execute({ id });

    return response.status(204).end();
  }
}

export { DeleteMovieController };

import { Request, Response } from 'express';
import { DeleteMovieService } from '../services/DeleteMovieService';

export class DeleteMovieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteMovieService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}

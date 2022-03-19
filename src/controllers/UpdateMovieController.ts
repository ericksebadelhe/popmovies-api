import { Request, Response } from 'express';
import { UpdateMovieService } from '../services/UpdateMovieService';

export class UpdateMovieController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const body = request.body;

    const service = new UpdateMovieService();

    const result = await service.execute({ id, ...body });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({
      ...result,
      rating: Number(result.rating),
      year: Number(result.year),
    });
  }
}

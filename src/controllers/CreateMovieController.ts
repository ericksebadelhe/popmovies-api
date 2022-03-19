import { Request, Response } from 'express';
import { CreateMovieService } from '../services/CreateMovieService';

export class CreateMovieController {
  async handle(request: Request, response: Response) {
    const { title, thumbnail, synopsis, rating, year, release_date, category_id } = request.body;

    const service = new CreateMovieService();

    const result = await service.execute({
      title,
      thumbnail,
      synopsis,
      rating,
      year,
      release_date,
      category_id
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

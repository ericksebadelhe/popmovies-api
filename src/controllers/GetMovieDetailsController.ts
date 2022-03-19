import { Request, Response } from 'express';
import { GetMovieDetailsService } from '../services/GetMovieDetailsService';

export class GetMovieDetailsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetMovieDetailsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

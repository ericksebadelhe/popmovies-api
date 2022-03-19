import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

export class DeleteCategoryService {
  async execute(categoryId: string) {
    const repo = getRepository(Category);

    if (!await repo.findOne(categoryId)) {
      return new Error('Movie category not found!');
    }

    await repo.delete(categoryId);

  }
}

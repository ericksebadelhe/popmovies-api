import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

type UpdateCategoryRequest = {
  id: string;
  name: string;
}

export class UpdateCategoryService {
  async execute({ id, name }: UpdateCategoryRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error ("Movie category not found!");
    }

    category.name = name || category.name;

    await repo.save(category);

    return category;
  }
}

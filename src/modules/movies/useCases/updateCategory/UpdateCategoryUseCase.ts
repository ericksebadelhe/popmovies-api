import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { ICategoryDTO } from '../../dtos';
import { AppError } from '../../../../errors/AppError';

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({
    id,
    name,
  }: ICategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category does not exists!');
    }

    category.name = name || category.name;

    await this.categoriesRepository.save(category);

    return category;
  }
}

export { UpdateCategoryUseCase };

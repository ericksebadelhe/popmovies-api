import { inject, injectable } from 'tsyringe';

import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { ICreateCategoryDTO } from '../../dtos';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ name }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    const newCategory = await this.categoriesRepository.create({ name });
    return newCategory;
  }
}

export { CreateCategoryUseCase };

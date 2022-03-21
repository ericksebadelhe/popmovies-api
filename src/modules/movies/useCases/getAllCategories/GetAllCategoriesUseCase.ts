import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { ICategoryDTO } from '../../dtos';

@injectable()
class GetAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<ICategoryDTO[]> {
    const categories = await this.categoriesRepository.getAll();
    return categories;
  }
}

export { GetAllCategoriesUseCase };

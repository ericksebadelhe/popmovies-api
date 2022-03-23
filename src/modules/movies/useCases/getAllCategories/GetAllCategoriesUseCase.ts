import { inject, injectable } from 'tsyringe';

import { ICategoryDTO } from '../../dtos';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class GetAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<ICategoryDTO[]> {
    const categories = await this.categoriesRepository.getAll();
    return categories;
  }
}

export { GetAllCategoriesUseCase };

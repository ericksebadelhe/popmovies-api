import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { IDeleteMovieDTO } from '../../dtos';

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({
    id,
  }: IDeleteMovieDTO): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new Error('Category does not exists!');
    }

    await this.categoriesRepository.delete(id);
  }
}

export { DeleteCategoryUseCase };

import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IDeleteMovieDTO } from '../../dtos';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id }: IDeleteMovieDTO): Promise<void> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError('Category does not exists!');
    }

    await this.categoriesRepository.delete(id);
  }
}

export { DeleteCategoryUseCase };

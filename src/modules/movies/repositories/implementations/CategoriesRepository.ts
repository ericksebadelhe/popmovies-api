import { getRepository, Repository } from 'typeorm';

import { ICreateCategoryDTO } from '../../dtos';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({ name });
    await this.repository.save(category);
    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = this.repository.findOne(id);
    return category;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: { name },
    });
    return category;
  }

  async save(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CategoriesRepository };

import { ICreateCategoryDTO } from '../dtos';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
  create({ name }: ICreateCategoryDTO): Promise<Category>;
  getAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  findByName(name: string): Promise<Category | undefined>;
  save(category: Category): Promise<Category>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository };

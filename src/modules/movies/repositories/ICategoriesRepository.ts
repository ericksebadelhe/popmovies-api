import { Category } from '../entities/Category';
import { ICreateCategoryDTO } from '../dtos';

interface ICategoriesRepository {
  create({ name }: ICreateCategoryDTO): Promise<Category>;
  getAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
  findByName(name: string): Promise<Category | undefined>;
  save(category: Category): Promise<Category>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository };

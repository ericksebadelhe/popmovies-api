import {v4 as uuid} from 'uuid';
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";
import { ICreateCategoryDTO } from "../../dtos";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const newCategory: Category = {
      id: uuid(),
      name,
      created_at: new Date(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async getAll(): Promise<Category[]> {
    const allCategories = this.categories;
    return allCategories;
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = this.categories.find(category => category.id === id);
    return category;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }

  async save(category: Category): Promise<Category> {
    const findIndex = this.categories.findIndex(findCategory => findCategory.id === category.id);
    this.categories[findIndex] = category;
    return category;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.categories.findIndex(findCategory => findCategory.id === id);
    this.categories.splice(findIndex, 1);
  }
}

export { CategoriesRepositoryInMemory };

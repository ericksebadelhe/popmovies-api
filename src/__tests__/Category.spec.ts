import { CategoriesRepositoryInMemory } from '../modules/movies/repositories/inMemory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from '../modules/movies/useCases/createCategory/CreateCategoryUseCase';
import { DeleteCategoryUseCase } from '../modules/movies/useCases/deleteCategory/DeleteCategoryUseCase';
import { GetAllCategoriesUseCase } from '../modules/movies/useCases/getAllCategories/GetAllCategoriesUseCase';
import { UpdateCategoryUseCase } from '../modules/movies/useCases/updateCategory/UpdateCategoryUseCase';

let getAllCategoriesUseCase: GetAllCategoriesUseCase;
let createCategoryUseCase: CreateCategoryUseCase;
let updateCategoryUseCase: UpdateCategoryUseCase;
let deleteCategoryUseCase: DeleteCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

const categoryTest = {
  name: "Category Test",
};

describe('Movies Categories', () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoriesRepositoryInMemory);
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepositoryInMemory);
    deleteCategoryUseCase = new DeleteCategoryUseCase(categoriesRepositoryInMemory);
  });

  it('should be able to list all categories', async () => {
    await createCategoryUseCase.execute(categoryTest);
    await createCategoryUseCase.execute({
      name: 'Category Testing 2'
    });

    const result = await getAllCategoriesUseCase.execute();
    expect(result).toHaveLength(2);
  });

  it('should be able to create a new category', async () => {
    const result = await createCategoryUseCase.execute(categoryTest);

    expect(result).toHaveProperty('id');
  });

  it('should not be able to create a new category with the same name', async () => {
    expect(async () => {
      await createCategoryUseCase.execute(categoryTest);
      await createCategoryUseCase.execute(categoryTest);
    }).rejects.toBeInstanceOf(Error);
  });

  it('should be able to update a category', async () => {
    const newCategoryName = 'New Category Test';

    const oldCategory = await createCategoryUseCase.execute(categoryTest);

    await updateCategoryUseCase.execute({
      id: oldCategory.id,
      name: newCategoryName,
    });

    const newCategory = await categoriesRepositoryInMemory.findById(oldCategory.id);

    expect(newCategory.name).toBe(newCategoryName);
  });

  it('should not be able to update a non-existing category', async () => {
    expect(async () => {
      await updateCategoryUseCase.execute({
        id: 'Non-existing Id',
        name: 'Non-existing category',
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it('should be able to delete a category', async () => {
    const category = await createCategoryUseCase.execute(categoryTest);

    await deleteCategoryUseCase.execute({ id: category.id });

    const allCategories = await getAllCategoriesUseCase.execute();

    expect(allCategories).toHaveLength(0);
  });

  it('should not be able to delete a non-existing category', async () => {
    expect(async () => {
      await deleteCategoryUseCase.execute({
        id: 'Non-existing Id',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});

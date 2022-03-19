import {MigrationInterface, QueryRunner} from "typeorm";
import categories from '../data/categoriesData';

export class SeedMovieCategories1647712603349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await Promise.all(
        categories.map(category => queryRunner.query(
          `INSERT INTO categories (id, name) VALUES ('${category.id}', '${category.name}')`
        )),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await Promise.all(categories.map(category => queryRunner.query(
        `DELETE FROM categories WHERE name='${category.name}';`
      )));
    }

}

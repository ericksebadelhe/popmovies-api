import {MigrationInterface, QueryRunner} from "typeorm";
import categories from '../data/categoriesData';

export class SeedCategories1647725292627 implements MigrationInterface {

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

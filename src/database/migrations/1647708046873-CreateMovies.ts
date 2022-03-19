import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1647708046873 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'movies',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'title',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'thumbnail',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'synopsis',
              type: 'varchar'
            },
            {
              name: 'rating',
              type: 'numeric',
            },
            {
              name: 'category_id',
              type: 'uuid'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
          ],
          foreignKeys: [
            {
              name: 'fkey_movies_categories',
              columnNames: ['category_id'],
              referencedTableName: 'categories',
              referencedColumnNames: ['id']
            }
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('movies');
    }

}

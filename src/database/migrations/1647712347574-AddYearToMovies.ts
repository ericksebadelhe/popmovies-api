import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddYearToMovies1647712347574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'movies',
        new TableColumn({
          name: 'year',
          type: 'numeric',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('movies', 'year');
    }

}

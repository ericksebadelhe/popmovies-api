import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddReleaseDateToMovies1647725163769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'movies',
        new TableColumn({
          name: 'release_date',
          type: 'timestamp',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('movies', 'release_date');
    }

}

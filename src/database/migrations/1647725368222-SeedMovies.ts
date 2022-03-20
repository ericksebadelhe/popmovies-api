import {MigrationInterface, QueryRunner} from "typeorm";
import data from '../data/moviesData';
import categories from '../data/categoriesData';

const movies = data.map(dt => {
  const category = categories.find(cat => cat.name === dt.category);
  return ({
    ...dt,
    category_id: category.id,
  });
});

export class SeedMovies1647725368222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await Promise.all(
        movies.map(movie => queryRunner.query(
          `INSERT INTO movies (id, title, thumbnail, synopsis, rating, duration, year, release_date, category_id) VALUES ('${movie.id}', '${movie.title}', '${movie.thumbnail}', '${movie.synopsis}', ${movie.rating}, ${movie.duration},${movie.year}, '${movie.release_date}', '${movie.category_id}')`
        )),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await Promise.all(movies.map(movie => queryRunner.query(
        `DELETE FROM movies WHERE title='${movie.title}';`
      )));
    }

}

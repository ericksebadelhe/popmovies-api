export interface ICreateCategoryDTO {
  name: string;
}

export interface ICategoryDTO {
  id: string;
  name: string;
}

export interface ICreateMovieDTO {
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  duration: number;
  release_date: Date;
  category_id: string;
}

export interface IGetAllMoviesDTO {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
}

export interface IUpdateMovieDTO {
  id: string;
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  duration: number;
  release_date: Date;
  category_id: string;
}

export interface IDeleteMovieDTO {
  id: string;
}

export interface IMovieDetailsDTO {
  id: string;
  title: string;
  thumbnail: string;
  synopsis: string;
  rating: number;
  year: number;
  duration: number;
  release_date: Date;
  category_id: string;
  category: string;
}

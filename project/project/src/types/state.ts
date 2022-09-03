import { store } from '../store/store';
import { AuthorizationStatus } from '../constants';
import { Movies, Movie, Genres, Genre } from '../types/movie';
import { Reviews } from './review';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
}

export type MoviesProcess = {
  movies: Movies,
  genres: Genres,
  genre: Genre,
  moviesByGenre: Movies,
  movie: Movie,
  isDataLoaded: boolean,
  promo: Movie,
  similarMovies: Movies,
  error: string | null,
  moviesPerStep: number,
}

export type ReviewProcess = {
  reviews: Reviews,
  isDataLoaded: boolean,
}

export type FavoriteProcess = {
  favoriteMovies: Movies,
  isDataLoaded: boolean,
}

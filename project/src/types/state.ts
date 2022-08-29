import { store } from '../store/store';
import { AuthorizationStatus } from '../constants';
import { Movies, Movie, Genres, Genre } from '../types/movie';
import { Reviews } from './review';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
}

export type MovieProcess = {
  movie: Movie,
  isDataLoaded: boolean,
  promo: Movie,
  similarMovies: Movies,
}

export type MoviesProcess = {
  movies: Movies,
  genres: Genres,
  genre: Genre,
  moviesByGenre: Movies,
  isDataLoaded: boolean,
  error: string | null,
}

export type ReviewProcess = {
  reviews: Reviews,
  isDataLoaded: boolean,
}

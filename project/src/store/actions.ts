import { createAction } from '@reduxjs/toolkit';
import { Movies } from '../types/movie';

export const changeGenre = createAction('movies/changeGenre', (genre: string) => ({
  payload: genre,
}));

export const getMoviesByGenre = createAction('movies/getMoviesByGenre');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setError = createAction<string | null>('movies/setError');

import { createAction } from '@reduxjs/toolkit';
import { Movies, Movie, Genre } from '../types/movie';
import { AuthorizationStatus } from '../constants';


export const changeGenre = createAction<Genre>('movies/changeGenre');

export const getMoviesByGenre = createAction('movies/getMoviesByGenre');

export const resetFilter = createAction('movies/resetFilter');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('movies/setError');

export const loadMovie = createAction<Movie>('data/loadMovie');

export const loadSimilarMovies = createAction<Movies>('data/loadSimilarMovies');

export const loadPromo = createAction<Movie>('data/loadPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

import { createAction } from '@reduxjs/toolkit';
import { Movies, Movie, Genre, similarMovies } from '../types/movie';


export const changeGenre = createAction<Genre>('movies/changeGenre');

export const getMoviesByGenre = createAction('movies/getMoviesByGenre');

export const resetFilter = createAction('movies/resetFilter');

export const loadMovies = createAction<Movies>('data/loadMovies');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setError = createAction<string | null>('movies/setError');

export const loadMovie = createAction<Movie>('data/loadMovie');

export const loadSimilarMovies = createAction<similarMovies>('data/loadSimilarMovies');

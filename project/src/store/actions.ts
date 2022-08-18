import { createAction } from '@reduxjs/toolkit';

export const genreSwitching = createAction('movies/genreSwitching', (genre) => ({
  payload: genre,
}));

export const movieListByGenre = createAction('movies/movieList');

// изменение жанра, получение списка фильмов

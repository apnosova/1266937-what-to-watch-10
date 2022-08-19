import { createReducer } from '@reduxjs/toolkit';
import { genreSwitching, movieListByGenre } from './actions';
import { movies } from '../mocks/movies';
import { DEFAULT_GENRE } from '../const';


const initialState = {
  genre: DEFAULT_GENRE,
  movies,
};

// жанр, список фильмов

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(genreSwitching, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(movieListByGenre, (state) => {
      state.movies = movies.filter((movie) => movie.genre === state.genre);

      if (state.genre === DEFAULT_GENRE) {
        state.movies = movies;
      }
    });
});


export { reducer };

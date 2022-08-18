import { createReducer } from '@reduxjs/toolkit';
import { genreSwitching, movieListByGenre } from './actions';
import { movies } from '../mocks/movies';
import { DEFAULTGENRE } from '../const';


const initialState = {
  genre: DEFAULTGENRE,
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

      if (state.genre === DEFAULTGENRE) {
        state.movies = movies;
      }
    });
});


export { reducer };

import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getMoviesByGenre, loadMovies, setError } from './actions';
import { DEFAULT_GENRE } from '../constants';
import { Movies } from '../types/movie';


type movieState = {
  movies: Movies,
  genre: string,
  error: string | null,
}

const initialState: movieState = {
  movies: [],
  genre: DEFAULT_GENRE,
  error: null,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getMoviesByGenre, (state) => {
      state.movies = state.movies.filter((movie) => movie.genre === state.genre);

      // if (state.genre === DEFAULT_GENRE) {
      //   state.movies = movies;
      // }
    });
});


export { reducer };

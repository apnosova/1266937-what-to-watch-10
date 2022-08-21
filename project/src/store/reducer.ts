import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getMoviesByGenre, resetFilter, loadMovies, setDataLoadedStatus, setError } from './actions';
import { DEFAULT_GENRE } from '../constants';
import { Movies, Genres } from '../types/movie';


type movieState = {
  movies: Movies,
  genres: Genres,
  genre: string,
  movieListByGenre: Movies,
  isDataLoaded: boolean,
  error: string | null,
}

const initialState: movieState = {
  movies: [],
  genres: [],
  genre: DEFAULT_GENRE,
  movieListByGenre: [],
  isDataLoaded: false,
  error: null,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.genres = [DEFAULT_GENRE, ...Array.from(new Set(state.movies.map((movie) => movie.genre))).sort()];
      state.movieListByGenre = state.movies;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getMoviesByGenre, (state) => {
      state.movieListByGenre = state.movieListByGenre.filter((movie) => movie.genre === state.genre);
      if (state.genre === DEFAULT_GENRE) {
        state.movieListByGenre = state.movies;
      }
    })
    .addCase(resetFilter, (state) => {
      state.movieListByGenre = state.movies;
    });
});


export { reducer };

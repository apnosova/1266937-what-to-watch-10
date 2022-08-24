import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getMoviesByGenre, resetFilter, loadMovies, setDataLoadedStatus, setError, loadMovie } from './actions';
import { DEFAULT_GENRE } from '../constants';
import { Movies, Movie, Genres } from '../types/movie';


type movieState = {
  movies: Movies,
  genres: Genres,
  genre: string,
  moviesByGenre: Movies,
  isDataLoaded: boolean,
  error: string | null,
  movie: Movie,
}

const initialState: movieState = {
  movies: [],
  genres: [],
  genre: DEFAULT_GENRE,
  moviesByGenre: [],
  isDataLoaded: false,
  error: null,
  movie: {} as Movie,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.genres = [DEFAULT_GENRE, ...Array.from(new Set(state.movies.map((movie) => movie.genre))).sort()];
      state.moviesByGenre = state.movies;
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
      state.moviesByGenre = state.moviesByGenre.filter((movie) => movie.genre === state.genre);
      if (state.genre === DEFAULT_GENRE) {
        state.moviesByGenre = state.movies;
      }
    })
    .addCase(resetFilter, (state) => {
      state.moviesByGenre = state.movies;
    })
    .addCase(loadMovie, (state, action) => {
      state.movie = action.payload;
    });
});


export { reducer };

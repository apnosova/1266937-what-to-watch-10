import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  getMoviesByGenre,
  resetFilter,
  loadMovies,
  setDataLoadedStatus,
  setError,
  loadMovie,
  loadSimilarMovies,
  loadPromo,
  loadReviews,
  requireAuthorization
} from './actions';
import { DEFAULT_GENRE, MAX_SIMILAR_MOVIES, AuthorizationStatus } from '../constants';
import { Movies, Movie, Genres } from '../types/movie';
import { Reviews } from '../types/review';


type InitialState = {
  movies: Movies,
  genres: Genres,
  genre: string,
  moviesByGenre: Movies,
  isDataLoaded: boolean,
  error: string | null,
  movie: Movie,
  similarMovies: Movies,
  promo: Movie,
  reviews: Reviews,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  movies: [],
  genres: [],
  genre: DEFAULT_GENRE,
  moviesByGenre: [],
  isDataLoaded: false,
  error: null,
  movie: {} as Movie,
  similarMovies: [],
  promo: {} as Movie,
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload.slice(0, MAX_SIMILAR_MOVIES);
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


export { reducer };

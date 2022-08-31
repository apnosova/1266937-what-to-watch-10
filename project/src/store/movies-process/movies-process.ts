import { createSlice } from '@reduxjs/toolkit';
import { MoviesProcess } from '../../types/state';
import { NameSpace, DEFAULT_GENRE, MAX_SIMILAR_MOVIES, MOVIES_PER_STEP, MAX_GENRE_ITEMS } from '../../constants';
import { fetchMoviesAction, fetchMovieAction, fetchPromoAction, fetchSimilarMoviesAction } from '../api-actions';
import { Movie } from '../../types/movie';


const initialState: MoviesProcess = {
  movies: [],
  movie: {} as Movie,
  isDataLoaded: false,
  error: null,
  genres: [],
  genre: DEFAULT_GENRE,
  moviesByGenre: [],
  promo: {} as Movie,
  similarMovies: [],
  moviesPerStep: MOVIES_PER_STEP,
};


export const moviesProcess = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
      state.moviesPerStep = MOVIES_PER_STEP;
    },
    getMovieListByGenre: (state) => {
      state.moviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      if (state.genre === DEFAULT_GENRE) {
        state.moviesByGenre = state.movies;
      }
    },
    showMoreMovies: (state) => {
      state.moviesPerStep += MOVIES_PER_STEP;
    },
    resetFilter: (state) => {
      state.genre = DEFAULT_GENRE;
      state.moviesPerStep = MOVIES_PER_STEP;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.genres = [DEFAULT_GENRE, ...Array.from(new Set(state.movies.map((movie) => movie.genre)))
          .sort()
          .slice(0, MAX_GENRE_ITEMS)];
        state.moviesByGenre = state.movies;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchMovieAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchMovieAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarMoviesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
        state.similarMovies = action.payload.slice(0, MAX_SIMILAR_MOVIES);
        state.isDataLoaded = false;
      });
  }
});


export const { changeGenre, getMovieListByGenre, resetFilter, showMoreMovies } = moviesProcess.actions;

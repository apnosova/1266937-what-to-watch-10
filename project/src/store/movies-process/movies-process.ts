import { createSlice } from '@reduxjs/toolkit';
import { MoviesProcess } from '../../types/state';
import { NameSpace, DEFAULT_GENRE } from '../../constants';
import { fetchMoviesAction } from '../api-actions';


const initialState: MoviesProcess = {
  movies: [],
  isDataLoaded: false,
  error: null,
  genres: [],
  genre: DEFAULT_GENRE,
  moviesByGenre: [],
};


export const moviesProcess = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    getMoviesByGenre: (state) => {
      state.moviesByGenre = state.movies.filter((movie) => movie.genre === state.genre);
      if (state.genre === DEFAULT_GENRE) {
        state.moviesByGenre = state.movies;
      }
    },
    resetFilter: (state) => {
      state.moviesByGenre = state.movies;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchMoviesAction.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.genres = [DEFAULT_GENRE, ...Array.from(new Set(state.movies.map((movie) => movie.genre))).sort()];
        state.moviesByGenre = state.movies;
        state.isDataLoaded = false;
      });

  }
});


export const { changeGenre, getMoviesByGenre, resetFilter } = moviesProcess.actions;

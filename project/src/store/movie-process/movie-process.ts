import { createSlice } from '@reduxjs/toolkit';
import { MovieProcess } from '../../types/state';
import { NameSpace, MAX_SIMILAR_MOVIES } from '../../constants';
import { Movie } from '../../types/movie';
import { fetchMovieAction, fetchPromoAction, fetchSimilarMoviesAction } from '../api-actions';

const initialState: MovieProcess = {
  movie: {} as Movie,
  promo: {} as Movie,
  isDataLoaded: false,
  similarMovies: [],
};


export const movieProcess = createSlice({
  name: NameSpace.Movie,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovieAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchMovieAction.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../types/state';
import { Movies, Movie, similarMovies } from '../types/movie';
import { loadMovies, setDataLoadedStatus, setError, loadMovie, loadSimilarMovies } from './actions';
import { ApiRoute, ERROR_TIMEOUT } from '../constants';
import { store } from './store-index';


export const clearError = createAsyncThunk(
  'movies/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  }
);

export const fetchMovies = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchMovies',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movies>(ApiRoute.Movies);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchMovie = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchMovie',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie>(`${ApiRoute.Movies}/${filmId}`);
    dispatch(loadMovie(data));
  }
);

export const fetchSimilarMovies = createAsyncThunk<void, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchSimilarMovies',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<similarMovies>(`${ApiRoute.Movies}/${filmId}/similar`);
    dispatch(loadSimilarMovies(data));
  }
);

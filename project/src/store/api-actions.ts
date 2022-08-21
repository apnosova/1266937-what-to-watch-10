import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../types/state';
import { Movies } from '../types/movie';
import { loadMovies, setError } from './actions';
import { ApiRoute, ERROR_TIMEOUT } from '../constants';
import { store } from './';


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
  'data/fetchQuestions',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movies>(ApiRoute.Movies);
    dispatch(loadMovies(data));
  },
);

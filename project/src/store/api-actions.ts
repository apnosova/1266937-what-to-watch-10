import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../types/state';
import { Movies, Movie } from '../types/movie';
import {
  loadMovies,
  setDataLoadedStatus,
  setError, loadMovie,
  loadSimilarMovies,
  loadPromo,
  requireAuthorization
} from './actions';
import { ApiRoute, ERROR_TIMEOUT, AuthorizationStatus } from '../constants';
import { store } from './store-index';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


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
    dispatch(setDataLoadedStatus(true));
    try {
      const { data } = await api.get<Movies>(ApiRoute.Movies);
      dispatch(loadMovies(data));
    }
    finally {
      dispatch(setDataLoadedStatus(false));
    }
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
    const { data } = await api.get<Movies>(`${ApiRoute.Movies}/${filmId}/similar`);
    dispatch(loadSimilarMovies(data));
  }
);

export const fetchPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie>(ApiRoute.Promo);
    dispatch(loadPromo(data));
  }
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
    catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(ApiRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

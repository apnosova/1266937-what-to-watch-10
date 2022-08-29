import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '../types/state';
import { Movies, Movie } from '../types/movie';
import { Reviews } from '../types/review';
import { redirectToRoute } from './actions';
import { ApiRoute, AppRoute } from '../constants';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { CommentData } from '../types/comment-data';


export const fetchMoviesAction = createAsyncThunk<Movies, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchMovies',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movies>(ApiRoute.Movies);
    return data;
  },
);

export const fetchMovieAction = createAsyncThunk<Movie, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchMovie',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie>(`${ApiRoute.Movies}/${filmId}`);
    return data;
  }
);

export const fetchSimilarMoviesAction = createAsyncThunk<Movies, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchSimilarMovies',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<Movies>(`${ApiRoute.Movies}/${filmId}/similar`);
    return data;
  }
);

export const fetchPromoAction = createAsyncThunk<Movie, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Movie>(ApiRoute.Promo);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(ApiRoute.Login);
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
    dispatch(redirectToRoute(AppRoute.Root));
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
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, number | undefined, {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${ApiRoute.Reviews}/${filmId}`);
    return data;
  }
);

export const postCommentAction = createAsyncThunk<void, [(number | undefined), CommentData], {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance
}>(
  'movies/postComment',
  async ([filmId, { comment, rating }], { dispatch, extra: api }) => {
    await api.post<CommentData>(`${ApiRoute.Reviews}/${filmId}`, { comment, rating });
    dispatch(redirectToRoute(`${AppRoute.Movies}/${filmId}`));
  });

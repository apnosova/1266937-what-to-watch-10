import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { moviesProcess } from './movies-process/movies-process';
import { movieProcess } from './movie-process/movie-process';
import { userProcess } from './user-process/user-process';
import { reviewProcess } from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: moviesProcess.reducer,
  [NameSpace.Movie]: movieProcess.reducer,
  [NameSpace.Reviews]: reviewProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

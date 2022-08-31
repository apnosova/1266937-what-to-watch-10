import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { moviesProcess } from './movies-process/movies-process';
import { userProcess } from './user-process/user-process';
import { reviewProcess } from './review-process/review-process';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: moviesProcess.reducer,
  [NameSpace.Reviews]: reviewProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

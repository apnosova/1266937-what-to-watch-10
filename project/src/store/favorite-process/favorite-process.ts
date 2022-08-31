import { createSlice } from '@reduxjs/toolkit';
import { FavoriteProcess } from '../../types/state';
import { NameSpace } from '../../constants';
import { fetchFavoriteAction, changeFavoriteStatusAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favoriteMovies: [],
  isDataLoaded: false,
};


export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
        state.isDataLoaded = false;
      });
  }
});

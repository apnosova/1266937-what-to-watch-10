import { createSlice } from '@reduxjs/toolkit';
import { ReviewProcess } from '../../types/state';
import { NameSpace } from '../../constants';
import { fetchReviewsAction, postCommentAction } from '../api-actions';


const initialState: ReviewProcess = {
  reviews: [],
  isDataLoaded: false,
};


export const reviewProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  }
});

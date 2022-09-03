import { createSlice } from '@reduxjs/toolkit';
import { ReviewProcess } from '../../types/state';
import { NameSpace } from '../../constants';
import { fetchReviewsAction, postCommentAction } from '../api-actions';


const initialState: ReviewProcess = {
  reviews: [],
  isDataLoading: false,
};


export const reviewProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(postCommentAction.fulfilled, (state) => {
        state.isDataLoading = false;
      });
  }
});

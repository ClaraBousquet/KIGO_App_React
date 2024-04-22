import { createSelector } from "@reduxjs/toolkit";

const postSelector = (state) => state.post;
const postLoadingSelector = (state) => state.post.isLoading;

export const selectpost = createSelector([postSelector], (post) =>
  post ? post.posts : []
);
export const selectIsLoading = createSelector(
    [postLoadingSelector],
    (isLoading) => isLoading
);


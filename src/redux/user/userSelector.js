import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;
const userLoadingSelector = (state) => state.user.isLoading;

export const selectusers = createSelector([userSelector], (user) =>
  user ? user.users : []
);
export const selectIsLoading = createSelector(
  [userLoadingSelector],
  (isLoading) => isLoading
);

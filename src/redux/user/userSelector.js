import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user.user;
const userLoadingSelector = (state) => state.user.isLoading;

export const selectUserData = createSelector(
  [userSelector, userLoadingSelector],
  (user, isLoading) => ({ user, isLoading })
)
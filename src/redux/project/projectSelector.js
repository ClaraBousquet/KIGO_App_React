import { createSelector } from "@reduxjs/toolkit";

const projectSelector = (state) => state.project;
const projectLoadingSelector = (state) => state.project.isLoading;

export const selectprojects = createSelector([projectSelector], (project) =>
  project ? project.projects : []
);
export const selectIsLoading = createSelector(
    [projectLoadingSelector],
    (isLoading) => isLoading
)
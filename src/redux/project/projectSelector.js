import { createSelector } from "@reduxjs/toolkit";

const projectSelector = (state) => state.project.projects;
const projectLoadingSelector = (state) => state.project.isLoading;

export const selectProjectData = createSelector(
  [projectSelector, projectLoadingSelector],
  (project, isLoading) => ({ project, isLoading })
)
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    // Ajouter les futurs reducers ici

    project: projectReducer,
    post: postReducer,
    user: userReducer,
  },
});
export default store;

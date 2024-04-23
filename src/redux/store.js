import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    // Ajouter les futurs reducers ici

    post: postReducer,
    user: userReducer,
  },
});
export default store;

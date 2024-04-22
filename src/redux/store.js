import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

const preloadedState =  {
 user: {
    userInfo: localStorage.getItem('userInfos') ? JSON.parse(localStorage.getItem('userInfos')) : null,
  },
};

export const store = configureStore({
  reducer: {
    // Ajouter les futurs reducers ici

    project: projectReducer,
    post: postReducer,
    user: userReducer,
  },
preloadedState,
});

export default store;

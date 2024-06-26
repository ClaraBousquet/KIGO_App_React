import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";
import skillsReducer from "./skills/skillsSlice";

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    post: postReducer,
    user: userReducer,
    
  },
});
export default store;

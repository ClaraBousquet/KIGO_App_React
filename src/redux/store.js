import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";


const store = configureStore({
  reducer: {
    // Ajouter les futurs reducers ici
 
  project: projectReducer,  
  
  },
});

export default store;

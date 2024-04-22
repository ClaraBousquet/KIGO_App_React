import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfos", JSON.parse(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
       localStorage.removeItem("userInfos");
    },
    // Ajoute d'autres reducers si nécessaire
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) => state.user.user
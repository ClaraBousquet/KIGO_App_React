import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";


const initialState = {
  user: null, 
  isLoading:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload;
    }
  },
});


// Méthode pour récupérer les données du user

export const fetchUser = (id) => async (dispatch) => {
  try {
    //on passe le state loading à true pour signifier qu'on attend une réponse
    dispatch(setLoading(true));
    const response = await axios.get(`${apiUrl}/users/${id}'`);
    //on set les données dans le state project
    dispatch(setUser(response.data));
    //on repasse le state loading a false pour signifier qu'on a fini d'attendre
    dispatch(setLoading(false));
  } catch (error) {
    console.log(`Erreur sur fetchUsers ${error}`);
    dispatch(setLoading(false));
  }
};

// Méthode pour mettre à jour les données du user
export const updateUserData = (userData, userId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.patch(
      `${apiUrl}/users/${userId}`, 
      JSON.stringify(userData), 
      {
        headers: {
          "Content-Type": "application/merge-patch+json", 
        },
      }
    );
    dispatch(updateUserSuccess(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de l'utilisateur: ${error}`);
    dispatch(setLoading(false));
  }
};


export const { setUser, setLoading, updateUserSuccess } = userSlice.actions;
export const selectUserData = (state) =>
  state.user.user || { user: null, isLoading: false };


export default userSlice.reducer;


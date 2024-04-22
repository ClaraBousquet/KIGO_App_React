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
    setLoading:(state, action)=> {
      state.isLoading = action.payload;
    }
}});

export const { setUser, setLoading } = userSlice.actions;

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
}


export default userSlice.reducer;


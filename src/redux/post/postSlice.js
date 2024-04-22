import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        isLoading: false,
    },

    reducers: {
        setposts: (state, action) => {
            state.posts = action.payload;
        },
      
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }

    }

});

export const { setposts, setLoading } = postSlice.actions;

// Méthode pour récupérer les données du projet de la bdd
export const fetchpost = () => async (dispatch) => {
  try {
    //on passe le state loading à true pour signifier qu'on attend une réponse
    dispatch(setLoading(true));
    const response = await axios.get(`${apiUrl}/posts?page=1`);
    //on set les données dans le state post
    dispatch(setposts(response.data));
    //on repasse le state loading a false pour signifier qu'on a fini d'attendre
    dispatch(setLoading(false));
  } catch (error) {
    console.log(`Erreur sur fetchpost: ${error}`);
    dispatch(setLoading(false));
  }
}


export default postSlice.reducer


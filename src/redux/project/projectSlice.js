import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],
        isLoading: false,
    },

    reducers: {
        setprojects: (state, action) => {
            state.projects = action.payload;
        },
      
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }

    }

});

export const { setprojects, setLoading } = projectSlice.actions;

// Méthode pour récupérer les données du projet de la bdd
export const fetchprojects = () => async (dispatch) => {
  try {
    //on passe le state loading à true pour signifier qu'on attend une réponse
    dispatch(setLoading(true));
    const response = await axios.get(`${apiUrl}/posts?page=1'`);
    //on set les données dans le state project
    dispatch(setprojects(response.data));
    //on repasse le state loading a false pour signifier qu'on a fini d'attendre
    dispatch(setLoading(false));
  } catch (error) {
    console.log(`Erreur sur fetchprojects: ${error}`);
    dispatch(setLoading(false));
  }
}


export default projectSlice.reducer


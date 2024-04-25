 import { createSlice } from "@reduxjs/toolkit";
 import axios from "axios";
 import { apiUrl } from "../../constants/apiConstant";

 const skillSlice = createSlice({
   name: "skills",
   //initialise valeur par defaut
   initialState: {
     loading: false,
     skills: [],
   },
   //remplir les valeur des states
   reducers: {
     setLoading: (state, action) => {
       state.loading = action.payload;
     },
     setSkills: (state, action) => {
       state.skills = action.payload;
     },
   },
 });

 export const { setLoading, setskills } = skillSlice.actions;

// methode qui recupère les données en BDD
 export const fetchSkills = () => async (dispatch) => {
   try {
     dispatch(setLoading(true));
   //  on stocke les données de la requete à l'API
     const response = await axios.get(`${apiUrl}/skills?page=1`);
    // set les données recu dans notre slice grace à setSkills
     dispatch(setSkills(response.data));
     dispatch(setLoading(false));
   } catch (error) {
     console.error(error);
     dispatch(setLoading(false));
   }
 };
 //on exporte notre reducer
 export default skillSlice.reducer;

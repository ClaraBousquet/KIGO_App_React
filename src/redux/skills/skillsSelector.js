 import { createSelector } from "@reduxjs/toolkit";

 //on recupere les données du slice qu'on stock dans des constantes
 const selectSkills = (state) => state.skills.skills || [];
 const selectLoading = (state) => state.skills.loading;

 export const selectSkillsData = createSelector(
   [selectSkills, selectLoading],
   //on destructure l'objet
   (skills, loading) => ({ skills: skills || [], loading })
 );

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { selectFilieresData } from '../redux/filiere/filiereSelector';
// import { fetchSkills } from '../redux/filiere/filiereSlice';
 
// const CustomList = ({label, callable}) => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(fetchSkills())
//     }, [])
    
 
//     //on recupère les infos du slice filiere
//     const {filieres} = useSelector(selectFilieresData);
//     console.log(filieres);
//     //on recupère le tableau de donnée de selectFilieres
//     const filiere = filieres['hydra:member'];
    
//   return (
//     <div className="m-3">
//       <label className="block text-whitel font-bold mb-2">{label}</label>
//       <div>
//         <select
//           onChange={callable}
//           className="shadow appearance-none border-orange rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-5"
//         >
//           <option value="0">choisir une filière</option>
//           {filiere &&
//             filiere.map((item, index) => (
//               <>
//                 <option key={index} value={item.id}>
//                   {item.label}
//                 </option>
//               </>
//             ))}
//         </select>
//       </div>
//     </div>
//   );
// }
// export default CustomList

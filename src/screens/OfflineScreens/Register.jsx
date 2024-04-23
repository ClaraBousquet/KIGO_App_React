import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import axios from "axios";
import { apiRoot } from "../../constants/apiConstant";
import { useAuthContext } from "../../contexts/AuthContext";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import loginIcon from '../../assets/login-icon.svg'
// import CustomList from "../../components/CustomList";

const Register = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [filiere, setFiliere] = useState("");
  const [filiereOptions, setFiliereOptions] = useState([]);
  const [skills, setSkills] = useState("");
  const [skillsOptions, setSkillsOptions] = useState([]);

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //on récupère la méthode signIn du context d'authentification
  const { signIn } = useAuthContext();
  //on récupère le hook de navigation
  const navigate = useNavigate();

  useEffect(() => {
    fetchFiliereOptions();
     fetchSkillsOptions();
  }, []);

  // Fonction pour gérer le changement de la filière sélectionnée
  const handleChangeFiliere = (event) => {
    // Récupérer la valeur de la filière sélectionnée dans le menu déroulant
    const selectedFiliere = event.target.value;
    // Mettre à jour la valeur de la filière dans le state
    setFiliere(selectedFiliere);
  };

  // Fonction pour gérer le changement des skills sélectionnée
  const handleChangeSkills = (event) => {
    // Récupérer la valeur de la filière sélectionnée dans le menu déroulant
    const selectedSkills = event.target.value;
    // Mettre à jour la valeur de la filière dans le state
    setSkills(selectedSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nickname : ", nickname);
    console.log("email : ", email);
    console.log("filiere : ", filiere);
    console.log("skills : ", skills);
    console.log({
      nickname,
      email,
      password,
      filiere: `/api/filieres/${filiere}`,
      skills,
    });
      setIsLoading(true);
      axios
        .post(`http://api-symfony-7-spotify.lndo.site/register`, {
          nickname,
          email,
          password,
          filiere:`/api/filieres/${filiere}`,

          skills,
        })
        .then((response) => {
          if (response.data.email) {
            const user = {
              userId: response.data.id,
              nickname: response.data.nickname,
              email: response.data.email,
              filiere: response.data.filiere,
              skills: response.data.skills,
            };

            try {
              signIn(user);
              setIsLoading(false);
              navigate("/homy");
            } catch (error) {
              setIsLoading(false);
              console.log(`Erreur lors de la création de la session: ${error}`);
            }
          } else {
            setIsLoading(false);
            console.log(`Erreur lors de la réponse serveur: ${response}`);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(`Erreur lors de l'enregistrement de l'user: `, error);
        });
  };

  //Fonction pour récupérer les options de filière depuis l'API
  const fetchFiliereOptions = () => {
   // Effectuer une requête à l'API pour récupérer les filières
    fetch("http://api-symfony-7-spotify.lndo.site/api/filieres")
      .then((response) => response.json())
      .then((data) => {
        //Vérifie que data est un objet JSON avec la propriété hydra:member
        if (data && data["hydra:member"]) {
        //  Mapper les filières pour obtenir un tableau d'objets avec les propriétés id et label
          const filieres = data["hydra:member"].map((filiere) => ({
            id: filiere.id,
            label: filiere.label,
          }));
          //Mettre à jour les options de filière dans le state
          setFiliereOptions(filieres);
        } else {
          console.error(
            "Données des filières non trouvées dans la réponse de l'API"
          );
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des filières:", error)
      );
  };

  // Fonction pour récupérer les options de skills depuis l'API
  const fetchSkillsOptions = () => {
    // Effectuer une requête à l'API pour récupérer les filières
    fetch("http://api-symfony-7-spotify.lndo.site/api/skillss")
      .then((response) => response.json())
      .then((data) => {
        // Vérifie que data est un objet JSON avec la propriété hydra:member
        if (data && data["hydra:member"]) {
          // Mapper les filières pour obtenir un tableau d'objets avec les propriétés id et label
          const skills = data["hydra:member"].map((skills) => ({
            id: skills.id,
            label: skills.label,
          }));
          // Mettre à jour les options de filière dans le state
          setSkillsOptions(skills);
        } else {
          console.error(
            "Données des filières non trouvées dans la réponse de l'API"
          );
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des filières:", error)
      );
  };



  return (
    <div className="flex flex-1 flex-col h-screen justify-start items-center bg-black">
      <h2 className="text-white font-bold text-xl py-5">Enregistrez vous!</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* input pour nickname */}
        <CustomInput
          state={nickname}
          label=" Pseudo"
          type="text"
          callable={(event) => setNickname(event.target.value)}
        />

        <div className="mb-4 mt-4 ml-4 mr-4">
          <label
            htmlFor="filiereSelect"
            className="block text-purple-700 font-bold mb-2 "
          >
            Ma filière :
          </label>
          {/* <CustomList
            label="Ma section"
            callable={(event) => setFiliere(event.target.value)}
          /> */}

          <select
            className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            id="filiereSelect"
            value={filiere}
            onChange={handleChangeFiliere} // Utilise la fonction handleChangeFiliere ici
          >
            <option value="">Sélectionnez une filière...</option>
            {/* Mapper sur les options de filière pour les afficher dans la liste déroulante */}
            {filiereOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 mt-4 ml-4 mr-4">
          <label
            htmlFor="skillsSelect"
            className="block text-purple-700 font-bold mb-2 "
          >
            Compétences :
          </label>
          <select
            className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            id="skillsSelect"
            value={skills}
            onChange={handleChangeSkills}
          >
            <option value="">Sélectionnez une compétence...</option>
            {/* Mapper sur les options de filière pour les afficher dans la liste déroulante */}
            {skillsOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* input pour email */}
        <CustomInput
          state={email}
          label=" Email"
          type="email"
          callable={(event) => setEmail(event.target.value)}
        />
        {/* input pour password */}
        <CustomInput
          state={password}
          label=" Mot de passe"
          type="password"
          callable={(event) => setPassword(event.target.value)}
        />
        <p className="text-white">
          Vous avez déjà un compte?
          <Link to="/" className="text-white font-bold hover:text-green">
            {" "}
            Se connecter
          </Link>
        </p>
        <div className="flex items-center justify-center pt-5">
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded flex align-items-center justify-center"
              onClick={handleSubmit}
            >
              <img src={loginIcon} alt="Login" style={{ marginRight: "8px" }} />
              Créer le projet
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;















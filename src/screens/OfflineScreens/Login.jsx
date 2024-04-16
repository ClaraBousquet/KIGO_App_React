import React, { useState } from "react";
import CustomInput from "../../components/CustomInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthContext";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { apiRoot } from "../../constants/apiConstant";
import loginIcon from '../../assets/login-icon.svg';  


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //on récupère signIn du context d'authentification
  const { signIn } = useAuthContext();
  //on récupère le hook de navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //empêche le fonctionnement par défaut du formulaire
    setIsLoading(true);
    axios
      .project(`${apiRoot}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.email) {
          const user = {
            userId: response.data.id,
            nickname: response.data.nickname,
            email: response.data.email,
          };

          try {
            signIn(user);
            setIsLoading(false);
            navigate("/");
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
        console.log(`Erreur lors de l'enregistrement de l'user: ${error}`);
      });
  };

  return (
    <div className="flex flex-1 flex-col h-screen justify-start items-center bg-black">
      <h2 className="text-purple-700 font-bold text-xl py-5">
        Connectez vous!
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* input pour email */}
        <CustomInput
          state={email}
          label="Identifiant"
          type="email"
          callable={(event) => setEmail(event.target.value)}
        />
        {/* input pour password */}
        <CustomInput
          state={password}
          label="Mot de passe"
          type="password"
          callable={(event) => setPassword(event.target.value)}
        />
        <p className="text-purple-700">
          Vous n'avez pas de compte?
          <Link
            to="/register"
            className="text-purple-700 font-bold hover:text-purple-700"
          >
            {" "}
            Créer un compte
          </Link>
        </p>
        <div className="flex items-center justify-center pt-5">
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <button
              type="submit"
              className="bg-black text-white font-bold py-2 px-4 rounded flex align-items-center justify-center"
            >
              <img src={loginIcon} alt="Login" style={{ marginRight: "8px" }} />
              
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

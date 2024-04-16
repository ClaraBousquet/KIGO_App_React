import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import axios from "axios";
import loginIcon from "../../assets/login-icon.svg";  


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const postData = {
      email,
      password,
    };

    axios
      .post("http://api-symfony-7-spotify.lndo.site/api/profils", postData, {
        headers: {
          "Content-Type": "application/ld+json", 
        },
      })
      .then((response) => {
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(`Erreur lors de la création du compte: ${error}`);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <CustomInput
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <CustomInput
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="flex items-center justify-center pt-5">
          {isLoading ? (
            <TailSpin color={"rgb(123, 31, 162)"} height={80} width={80} />
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

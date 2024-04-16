import React from "react";
import CustomInput from "../../components/CustomInput";
import ButtonProject from "../../components/Loader/ButtonLoader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";
import { TailSpin } from "react-loader-spinner";
import loginIcon from "../../assets/login-icon.svg";

const Addproject = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dateCreation, setDateCreation] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const postData = {
      "@context": "https://schema.org",
      "@type": "Project",
      title,
      description: description,
      dateCreated: dateCreation,
    };

    axios
      .post(`${apiUrl}/posts`, postData, {
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
        console.error(`Erreur lors de l'ajout du projet: ${error}`);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Titre du projet"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <CustomInput
          label="Description du projet"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <CustomInput
          label="Date de création du projet"
          type="date"
          value={dateCreation}
          onChange={(event) => setDateCreation(event.target.value)}
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

export default Addproject;

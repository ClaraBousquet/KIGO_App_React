import React, { useEffect, useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, selectUserData } from "../../../redux/user/userSlice";
import { Link } from "react-router-dom";
import CustomInput from "../../../components/CustomInput";

const MyAccount = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(selectUserData);

  // States locaux pour gérer les modifications des inputs
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [biography, setBiography] = useState("");

  // Effet pour charger les données utilisateur
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setNickname(user.nickname);
      setBiography(user.biography);
    }
  }, [user]);

  const handleSave = () => {
    if (user && user.id) {
      dispatch(updateUserData({ userId: user.id, email, nickname }));
    } else {
      console.error(
        "Erreur : Les données utilisateur ne sont pas disponibles."
      );
      // Vous pouvez également afficher une notification ou un message d'erreur à l'utilisateur ici
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img className=" image-size " src="kigo.png" alt="" />
      <img src="src/assets/userrrr.png" alt="user" className="w-24 h-24" />

      <Link to="/homy">
        <img
          src="src/assets/arrow.png"
          alt="Post"
          className="mb-7 mt-7 mr-80"
        />
      </Link>

      <div className="mb-4 mt-4 ml-4 mr-4">
        <label className="block text-purple-700 font-bold mb-2 "></label>
        <p className="block text-purple-700 font-quatro-book font-bold mb-2 ">
          Nickname
        </p>
        <input
          type={nickname}
          className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="toto"
          style={{ color: "purple" }}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>

      <div className="mb-4 mt-4 ml-4 mr-4">
        <label className="block text-purple-700 font-bold mb-2 "></label>
        <p className="block text-purple-700 font-quatro-book font-bold mb-2 ">
          Email
        </p>
        <input
          type={email}
          className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="t@t.com"
          style={{ color: "purple" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4 mt-4 ml-4 mr-4">
        <label className="block text-purple-700 font-bold mb-2 "></label>
        <p className="block text-purple-700 font-quatro-book font-bold mb-2 ">
          Biographie
        </p>
        <input
          type={biography}
          className="form-input mt-1 block w-full px-3 py-2 bg-white border border-purple-300 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          placeholder="Je suis étudiant en deuxième année audio visuel"
          style={{ color: "purple" }}
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 p-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
      >
        Sauvegarder les modifications
      </button>
    </div>
  );
};

export default MyAccount;

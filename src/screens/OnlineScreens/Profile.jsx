import React from "react";
import { Link } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";
import {  FaRegUser } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const img = `src/assets/projects.jpg`;

const Profile = () => {

const { signOut } = useAuthContext();
const navigate = useNavigate();

const handleSignOut = async () => {
  try {
    await signOut();
    navigate("/login"); // Redirection après la déconnexion
  } catch (error) {
    console.error("Erreur lors de la déconnexion", error);
  }
};

  return (
    <div className="flex flex-col justify-center items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img className=" image-size " src="kigo.png" alt="" />
      <Link to="/homy">
        <img src="src/assets/arrow.png" alt="Post" className="w-7 h-7 mr-80" />
      </Link>
      <div className="flex justify-center mt-20">
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          <div className=" card flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
            <div className="relative w-full flex flex-col overflow-hidden">
              <p className="text-xl font-bold m-4">
                <h1>Mes projets</h1>
              </p>
              <Link
                to="/myprojects"
                className="flex items-center justify-center w-full"
              >
                <MdWorkHistory className="w-20 h-20 text-center " />
              </Link>
            </div>
          </div>

          <div className=" card flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
            <div className="relative w-full flex flex-col overflow-hidden">
              <p className="text-xl font-bold m-4">
                <h1>Ma messagerie</h1>
              </p>
              {/* Utilise un Link pour lier chaque post à sa page détail */}
              <Link
                to="/messages"
                className="flex items-center justify-center w-full"
              ></Link>
              <TiMessages className="w-20 h-20 text-center" />
            </div>
          </div>

          <div className=" card flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
            <div className="relative w-full flex flex-col overflow-hidden">
              <p className="text-xl font-bold m-4">
                <h1>Mon profil</h1>
              </p>
              {/* Utilise un Link pour lier chaque post à sa page détail */}
              <Link
                to="/myaccount"
                className="flex items-center justify-center w-full"
              >
                <FaRegUser className="w-20 h-20 text-center " />
              </Link>
            </div>
          </div>

          <div>
            <div className=" card relative w-full flex flex-col overflow-hidden">
              <p className="text-xl font-bold m-4">
                <h1>Se déconnecter</h1>
              </p>
              <button
                onClick={handleSignOut}
                className="flex items-center justify-center w-full"
              >
                <RiLogoutBoxFill className="w-20 h-20 text-center" />
              </button>

              <Link
                to="/messages"
                className="flex items-center justify-center w-full"
              ></Link>
              <RiLogoutBoxFill className="w-20 h-20 text-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

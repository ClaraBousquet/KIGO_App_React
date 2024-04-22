import React from "react";
import { MdWorkHistory } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import Topbar from "../../components/Topbar";
import { Link } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";


const img = `src/assets/projects.jpg`;

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className=" image-size " src="kigo.png" alt="" />

      <div className="flex justify-center mt-20">
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          <div className="flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
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
          <div className="flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
            <div className="relative w-full flex flex-col overflow-hidden">
              <p className="text-xl font-bold m-4">
                <h1>Mon compte</h1>
              </p>
              <Link
                to="/myaccount"
                className="flex items-center justify-center w-full"
              >
                <FaUserGear className="w-20 h-20 text-center" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col p-4 shadow-md w-50 h-54 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;

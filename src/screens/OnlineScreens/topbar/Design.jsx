import React from "react";
import { Link } from "react-router-dom";
import Footerbar from "../../../components/Footerbar";

const Design = () => {
  const img = `src/assets/projects.jpg`;

  return (
    <div className="flex flex-col justify-center items-center">
      <img src="kigo.png" alt="" />
      <div className="flex flex-col justify-center items-center">
        <p
          style={{ color: `#8f00ff` }}
          className="text-xl truncate font-bold m-4 shadow-sm "
        >
          Design
        </p>

        <Link to="/homy">
          <img src="src/assets/arrow.png" alt="Post" className="mb-7 mr-80" />
        </Link>

        <img className="mb-4" src="src/assets/design-icon.png" alt="" />
        <div className="flex flex-col p-4 mb-6 shadow-md w-64 h-64 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
          <div className="relative w-full flex flex-col overflow-hidden">
            <div className="flex">
              <p className="text-xl truncate font-bold m-4">Design affiche</p>
              <p className="bg-indigo-500 text-white text-xs font-semibold mb-10 mx-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 inline-block">
                Design
              </p>
            </div>

            <img
              src={img}
              alt="Post"
              className="card-sh rounded-lg object-cover h-52 w-52"
            />

            <div className="absolute bottom-4 right-4">
              <button className="bg-transparent border-none outline-none">
                <img
                  src="src/assets/rejoindre.png"
                  alt="Rejoindre"
                  className="w-20 h-10 shadow-sm border-2, border-white rounded-full z-10"
                />
              </button>
            </div>

            <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75"></div>
            <div className="mt-4 flex flex-col"></div>
          </div>
        </div>

        <div className="flex flex-col p-4 shadow-md w-64 h-64 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
          <div className="relative w-full flex flex-col overflow-hidden">
            <div className="flex">
              <p className="text-xl truncate font-bold m-4">Court métrage</p>
              <p className="bg-indigo-500 text-white text-xs font-semibold mb-10 mx-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 inline-block">
                Design
              </p>
            </div>

            <img
              src={img}
              alt="Post"
              className="card-sh rounded-lg object-cover h-52 w-52"
            />

            <div className="absolute bottom-4 right-4">
              <button className="bg-transparent border-none outline-none">
                <img
                  src="src/assets/rejoindre.png"
                  alt="Rejoindre"
                  className="w-20 h-10 shadow-sm border-2, border-white rounded-full z-10"
                />
              </button>
            </div>

            <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75"></div>
            <div className="mt-4 flex flex-col"></div>
          </div>
        </div>
      </div>
      <Footerbar />
    </div>
  );
};

export default Design;

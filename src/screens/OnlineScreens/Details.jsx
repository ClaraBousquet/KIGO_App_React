import React from "react";
import Topbar from "../../components/Topbar";
import { Link } from "react-router-dom";

const Details = () => {
  const img = `src/assets/projects.jpg`;


  return (
    <div className="flex flex-col justify-center items-center">
      <Link to="/homy">
        <img
          src="src/assets/arrow.png"
          alt="Post"
          className="mb-7 mr-80 mt-20"
        />
      </Link>
      <Topbar />
      <div className="flex flex-col p-4 mb-6 shadow-md w-80 h-80 bg-gradient-to-b from-purple1 to-pink1 hover:bg-purple-800 transition-all ease-out duration-800 animate-slideup rounded-md cursor-pointer group">
        <div className="relative w-full flex flex-col overflow-hidden">
          <div className="flex"></div>
          <img
            src={img}
            alt="Post"
            className="card-sh rounded-lg object-cover h-282px w-327px radius-xl shadow-sm"
          />
          <div className="absolute bottom-4 right-4"></div>
          <div className="group-hover:animate-slideup2 bg-black outline-none rounded-full group-hover:duration-75"></div>
          <div className="mt-4 flex flex-col"></div>
        </div>
      </div>
      <p className="text-xl  font-quatro-book  font-extrabold m-4" style={{ color: `#BF008A` }}>toto</p>
      <button className="bg-transparent border-none outline-none">
        <img
          src="src/assets/rejoindre.png"
          alt="Rejoindre"
          className="w-20 h-10 ml-40 shadow-sm border-2, border-white rounded-full z-10"
        />
      </button>
      <p style={{ color: `#BF008A` }} className="text-xl  font-quatro-book  font-extrabold m-4">
        Intégration site
      </p>
    </div>
  );
};

export default Details;

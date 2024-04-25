import React from "react";
import houseIcon from "../assets/house-logo.svg";
import searchIcon from "../assets/search-logo.svg";
import messageIcon from "../assets/message.svg";
import { MdOutlineAddCircle } from "react-icons/md";
import footbar from "../assets/footbar.svg";
import userlogo from "../assets/user-logo.png";
import { Link } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";




const Footerbar = () => {
  return (
    <div
      className="fixed bottom-0 w-full flex items-center justify-evenly"
      style={{
        backgroundImage: `url(${footbar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Link to="/">
        <img src={houseIcon} alt="Accueil" className="w-8 h-8" />
      </Link>
      <img src={searchIcon} alt="Rechercher" className="w-8 h-8" />
      <Link to="/addproject">
        <MdOutlineAddCircle className="w-14 h-14 " style={{ color: "white" }} />
      </Link>
      <img src={messageIcon} alt="Messages" className="w-8 h-8" />

      <Link to="/profile">
        <TfiDashboard  className="w-10 h-10" />
      </Link>
    </div>
  );
};

export default Footerbar;

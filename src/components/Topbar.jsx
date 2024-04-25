import React from "react";
import { Link } from "react-router-dom";
import uxuiIcon from "../assets/uiux-icon.png";
import audioIcon from "../assets/audio-icon.png";
import animIcon from "../assets/anim-icon.png";
import designIcon from "../assets/design-icon.png";
import devIcon from "../assets/dev-icon.png";
import Footerbar from "./Footerbar";

const Topbar = () => {
  const links = [
    { icon: uxuiIcon, text: "UX/UI", path: "/uxui" },
    { icon: audioIcon, text: "Audio", path: "/audio" },
    { icon: animIcon, text: "Anim", path: "/anim" },
    { icon: designIcon, text: "Design", path: "/design" },
    { icon: devIcon, text: "Dev", path: "/dev" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <img className="image-size" src="kigo.png" alt="" />

      <div className="h-20 flex justify-between items-center bg-black m-5">
        {links.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="bg-cover bg-center w-16 h-16 rounded-lg flex justify-center items-center relative text-white"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <span className="absolute text-lg font-extrabold shadow">
              {item.text}
            </span>
          </Link>
        ))}
      </div>
      <Footerbar />
    </div>
  );
};

export default Topbar;

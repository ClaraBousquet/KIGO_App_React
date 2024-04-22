import React from "react";
import uxuiIcon from "../assets/uiux-icon.png";
import audioIcon from "../assets/audio-icon.png";
import animIcon from "../assets/anim-icon.png";
import designIcon from "../assets/design-icon.png";
import devIcon from "../assets/dev-icon.png";

const Topbar = () => {
  return (
  <div className="flex flex-col justify-center items-center">
    <img className=" image-size " src="kigo.png" alt="" />

    <div className="h-20 flex justify-between items-center bg-black m-5">
      {[
        { icon: uxuiIcon, text: "UX/UI" },
        { icon: audioIcon, text: "Audio" },
        { icon: animIcon, text: "Anim" },
        { icon: designIcon, text: "Design" },
        { icon: devIcon, text: "Dev" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-cover bg-center w-16 h-16 rounded-lg flex justify-center items-center relative text-white"
          style={{ backgroundImage: `url(${item.icon})` }}
        >
         
          <span className="absolute text-lg font-extrabold shadow">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Topbar;

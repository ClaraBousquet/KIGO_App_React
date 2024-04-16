import React from "react";
import { Outlet } from "react-router-dom";


const HomeOffline = () => {
  return (
    <>
      <div className="w-screen bg-black">
        <img
          src={`kigo.png`}
          alt="Logo KIGO"
          className="w-full h-28 object-contain pt-4"
        />
      </div>
      <Outlet />
    </>
  );
};

export default HomeOffline;

import React from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/userSlice";

const MyAccount = () => {
  const user = useSelector(selectUser);
  console.log(user); // Ajout pour débogage
  return (
    <div className="flex flex-col items-center">
      <img className=" image-size " src="kigo.png" alt="" />
      <PiUserCircleFill
        className="w-24 h-24 flex mt-7 items-center justify-center"
        style={{ color: `#8f00ff` }}
      />
      <h1 className="text-3xl font-bold" style={{ color: `#8f00ff` }}>
        Mon compte
      </h1>
      <h1 className="text-3xl font-bold" style={{ color: `#8f00ff` }}>
        {user ? `${user.email} ${user.nickname}` : "Loading..."}
      </h1>
    </div>
  );
};

export default MyAccount;

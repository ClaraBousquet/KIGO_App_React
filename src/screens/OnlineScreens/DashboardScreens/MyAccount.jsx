import React, { useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { USER_INFOS } from "../../../constants/appConstant";
import { selectUserData } from "../../../redux/user/userSelector";
import { fetchUser } from "../../../redux/user/userSlice";

const MyAccount = () => {
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem(USER_INFOS)).userId;

  useEffect(() => {
    dispatch(fetchUser(userId));

  })

const {user, isLoading} = useSelector(selectUserData)

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

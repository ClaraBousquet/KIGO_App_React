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
      <h1 className="text-3xl font-bold mb-20" style={{ color: `#8f00ff` }}>
        Mon compte
      </h1>
      <table className="table-auto " style={{ color: `#8f00ff` }}>
        <tbody>
          <tr>
            <th>Email :</th>
            <td>{user ? user.email : "Chargement..."}</td>
          </tr>
          <tr>
            <th>Nom d'utilisateur : </th>
            <td>{user ? user.nickname : "Chargement..."}</td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
};

export default MyAccount;

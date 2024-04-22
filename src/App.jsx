import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from './contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { USER_INFOS } from './constants/appConstant'
//import { checkUser } from './services/userService'
import { checkUser } from "./services/userService";


const App = () => {
  //on récupère les données de l'utilisateur depuis le locale storage
  const userInfo = JSON.parse(localStorage.getItem(USER_INFOS));
 const fetchUser = async () => {
     const user = await checkUser(userInfo);
    if (user) {
      return;
    } else {
       signOut();
       navigate("/");
    }
  };

  const { signOut } = useAuthContext();
  //on récupère le hook de navigation
  const navigate = useNavigate();


  useEffect(() => {
    fetchUser();
  }, [userInfo]);

   return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-black">
        <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40 text-white">
            <Outlet />
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App
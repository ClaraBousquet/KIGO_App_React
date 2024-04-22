import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import Login from "../screens/OfflineScreens/Login";
import Register from "../screens/OfflineScreens/Register";
import Homy from "../screens/OnlineScreens/Homy";


const OfflineRouter = createBrowserRouter([
  {
    path: "/", // Définis un chemin pour le composant racine
    element: <HomeOffline />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/homy",
        element: <Homy />,
      },
    
    ],
  },
]);

export default OfflineRouter;

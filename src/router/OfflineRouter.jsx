import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import Login from "../screens/OfflineScreens/Login";
import Register from "../screens/OfflineScreens/Register";
import Home from "../screens/OnlineScreens/Home";
import Addproject from "../screens/OnlineScreens/Addproject";


const OfflineRouter = createBrowserRouter([
  {
    path: "/", // Définis un chemin pour le composant racine
    element: <HomeOffline />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/addproject",
        element: <Addproject />,
      },
    ],
  },
]);

export default OfflineRouter;

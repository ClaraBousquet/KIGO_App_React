import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
import Addproject from "../screens/OnlineScreens/Addproject";
import Homy from "../screens/OnlineScreens/Homy";
import Profile from "../screens/OnlineScreens/Profile";
import MyProjects from "../screens/OnlineScreens/DashboardScreens/MyProjects";
import MyAccount from "../screens/OnlineScreens/DashboardScreens/MyAccount";
import Uxui from "../screens/OnlineScreens/topbar/Uxui";
import Audio from "../screens/OnlineScreens/topbar/Audio";
import Anim from "../screens/OnlineScreens/topbar/Anim";
import Design from "../screens/OnlineScreens/topbar/Design";
import Dev from "../screens/OnlineScreens/topbar/Dev";


const OnlineRouter = createBrowserRouter([
  {
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
    //on déclare les route avec leur vue
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/homy",
        element: <Homy />,
      },
      {
        path: "/addproject",
        element: <Addproject />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/myprojects",
        element: <MyProjects />,
      },
      {
        path: "myaccount",
        element: <MyAccount />,
      },
      {
        path: "uxui",
        element: <Uxui />,
      },
      {
        path: "audio",
        element: <Audio />,
      },
      {
        path: "anim",
        element: <Anim />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "dev",
        element: <Dev />,
      },
    ],
  },
]);

export default OnlineRouter;

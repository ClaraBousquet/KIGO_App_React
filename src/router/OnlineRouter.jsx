import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Home from "../screens/OnlineScreens/Home";
import Addproject from "../screens/OnlineScreens/Addproject";
import Homy from "../screens/OnlineScreens/Homy";
import Profile from "../screens/OnlineScreens/Profile";
import MyProjects from "../screens/OnlineScreens/DashboardScreens/MyProjects";
import MyAccount from "../screens/OnlineScreens/DashboardScreens/MyAccount";


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
      }
    ],
  },
]);

export default OnlineRouter;

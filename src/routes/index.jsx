import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";
import ProfilePage from "../pages/Profile";
import AuthPage from "../pages/Auth";
import Ui from "../pages/Ui";
import Search from "../pages/Search";
import Details from "@/pages/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <AuthPage />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/ui",
    element: <Ui />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path:"/Details",
    element:<Details/>
  }
]);
export default router;

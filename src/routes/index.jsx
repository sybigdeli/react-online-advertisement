import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";
import ProfilePage from "../pages/Profile";
import AuthPage from "../pages/Auth";
import Ui from "../pages/Ui";
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
]);
export default router;

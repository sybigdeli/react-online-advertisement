import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";
import ProfilePage from "../pages/Profile";
import AuthPage from "../pages/Auth";
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
]);
export default router;

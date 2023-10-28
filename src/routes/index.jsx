import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/index";
import Ui from "@/pages/Ui";
import Search from "@/pages/Search";
import Details from "@/pages/Details";
import Login from "@/pages/Login";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
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
    path: "/Details",
    element: <Details />,
  },
]);
export default router;

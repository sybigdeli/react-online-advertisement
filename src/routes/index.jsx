import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/index";
import Ui from "@/pages/Ui";
import Search from "@/pages/Search";
import Details from "@/pages/Details";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Auth from "@/pages/Auth";
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
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/sign-in",
    element: <Auth key="sign-in" mode="sign-in"/>,
  },
  {
    path: "/auth/sign-up",
    element: <Auth key="sign-up" mode="sign-up"/>,
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

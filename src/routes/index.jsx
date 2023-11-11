import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/index";
import Ui from "@/pages/Ui";
import Search from "@/pages/Search";
import Details from "@/pages/Details";
import BaseLayout from "@/components/BaseLayout/BaseLayout";
import Auth from "@/pages/Auth";
import NewPost from "@/pages/NewPost";
import Page404 from "@/pages/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/sign-in",
    element: <Auth key="sign-in" mode="sign-in" />,
  },
  {
    path: "/auth/sign-up",
    element: <Auth key="sign-up" mode="sign-up" />,
  },
  {
    path: "/ui",
    element: <Ui />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/posts/new",
    element: <NewPost />,
  },
  {
    path: "/*",
    element: <Page404 />,
  },
]);
export default router;

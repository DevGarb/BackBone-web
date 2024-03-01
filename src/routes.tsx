import { RouteObject } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";
import { MainLayout } from "./layouts/MainLayout";
import { DevDetailPage } from "./pages/DevDetailPage/DevDetailPage";

export const ROUTES = {
  Home: "/",
  About: "/about/",
  DevDetail: "/dev-detail/",
};

export default [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.Home,
        element: <HomePage />,
      },
      {
        path: ROUTES.About + ":name",
        element: <AboutPage />,
      },
      {
        path: ROUTES.DevDetail,
        element: <DevDetailPage />,
      }
    ],
  },
] as RouteObject[];

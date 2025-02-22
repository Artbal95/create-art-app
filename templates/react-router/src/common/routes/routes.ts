import { createBrowserRouter } from "react-router";

import AppLayout from "@common/layouts/AppLayout";

import Home from "@pages/Home";
import About from "@pages/About";

import { RoutesEnum } from "@shared/enums";

const ROUTES = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: RoutesEnum.HOME,
        Component: Home,
      },
      {
        path: RoutesEnum.ABOUT,
        Component: About,
      },
    ],
  },
]);

export default ROUTES;

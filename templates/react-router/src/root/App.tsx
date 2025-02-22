import { FC } from "react";
import { RouterProvider } from "react-router";

import ROUTES from "@common/routes";

const App: FC = () => <RouterProvider router={ROUTES} />;

export default App;

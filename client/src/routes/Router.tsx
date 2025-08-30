import Root from "@/layouts/Root";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";


const Router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
        {
            // path: "/",
            index: true,
            // element: <Home/>,
            Component: Home
        }
    ]
  },
]);

export default Router;
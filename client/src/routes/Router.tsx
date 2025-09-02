import Root from "@/layouts/Root";
import BooksPage from "@/pages/BooksPage";
import CreateBookPage from "@/pages/CreateBookPage";
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
        },
        {
            path: "/books",
            element: <BooksPage/>,
        },
        {
            path: "/books/create-book",
            element: <CreateBookPage/>,
        },
    ]
  },
]);

export default Router;
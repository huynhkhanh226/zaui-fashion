import Layout from "components/layout";
import HomePage from "pages/home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { getBasePath } from "utils/zma";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/category",
          element: <HomePage />,
        },
        {
          path: "/cart",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <HomePage />,
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;

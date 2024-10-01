import Layout from "components/layout";
import CategoryPage from "pages/detail/category";
import ProductPage from "pages/detail/product";
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
          handle: {
            logo: true,
          },
        },
        {
          path: "/categories",
          element: <HomePage />,
          handle: {
            title: "Danh mục sản phẩm",
            back: false,
          },
        },
        {
          path: "/cart",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <HomePage />,
        },
        {
          path: "/category/:id",
          element: <CategoryPage />,
          handle: {
            title: ({ categories, params }) =>
              categories.find((c) => c.id === Number(params.id))?.name,
          },
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
          handle: {},
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;

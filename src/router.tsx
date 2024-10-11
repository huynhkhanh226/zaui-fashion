import Layout from "components/layout";
import CartPage from "pages/cart";
import CategoriesPage from "pages/categories";
import CategoryPage from "pages/detail/category";
import ProductPage from "pages/detail/product";
import HomePage from "pages/home";
import ProfilePage from "pages/profile";
import SearchPage from "pages/search";
import { createBrowserRouter } from "react-router-dom";
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
          element: <CategoriesPage />,
          handle: {
            title: "Danh mục sản phẩm",
            back: false,
          },
        },
        {
          path: "/cart",
          element: <CartPage />,
          handle: {
            title: "Giỏ hàng",
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            logo: true,
          },
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
        {
          path: "/search",
          element: <SearchPage />,
          handle: {
            title: "Tìm kiếm",
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ProtectedLayout, {
  loader as userLoader,
} from "@/layouts/ProtectedLayout";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import ErrorPage from "@/components/ErrorPage";
import ProductsPage from "@/pages/ProductsPage";
import SubProductsPage from "@/pages/SubProductsPage";
import SolutionsPage from "@/pages/SolutionsPage";
import GetInTouchPage from "@/pages/GetInTouchPage";
import BlogPage from "@/pages/BlogPage";
import AboutUsPage from "@/pages/AboutUsPage";
const routesConfig = [
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        id: "protected",
        path: "",
        element: <ProtectedLayout />,
        loader: userLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
              {
                path: "product",
                element: <ProductsPage />,
              },
              {
                path: "sub-product",
                element: <SubProductsPage />,
              },
              {
                path: "solutions",
                element: <SolutionsPage />,
              },
              {
                path: "get-in-touch",
                element: <GetInTouchPage />,
              },
              {
                path: "blog",
                element: <BlogPage />,
              },
              {
                path: "about-us",
                element: <AboutUsPage />,
              }
            ]
          },
      
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);

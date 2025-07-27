import { createBrowserRouter } from "react-router";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import { Text } from "@chakra-ui/react";
import Login from "../pages/Login";
import Product from "./../pages/Product";
import ProtectedRoute from "../components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

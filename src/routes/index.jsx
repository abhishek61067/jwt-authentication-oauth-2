import { createBrowserRouter } from "react-router";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import { Text } from "@chakra-ui/react";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Text color={"white"}>Hello World</Text>,
      },

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
        element: <Text color={"white"}>Product Page</Text>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import { Text } from "@chakra-ui/react";
import Login from "../pages/Login";
import Product from "./../pages/Product";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Dashboard from "../dashboard/dashboard";
import RoleBasedProtectedRoute from "./../components/auth/RoleBasedProtectedRoute";
import Unauthorized from "../pages/Unauthorized";
import Home from "./../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RoleBasedProtectedRoute allowedRole={["ADMIN"]}>
            <Dashboard />
          </RoleBasedProtectedRoute>
        ),
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
]);

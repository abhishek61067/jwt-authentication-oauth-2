import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Product from "./../pages/Product";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Dashboard from "../dashboard/dashboard";
import Unauthorized from "../pages/Unauthorized";
import Home from "./../pages/Home";
import RoleBasedProtectedRoute from "../components/auth/RoleBasedProtectedRoute";

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

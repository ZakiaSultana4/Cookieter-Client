import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import AddFood from "../Page/AddFood";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/ErrorPage";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import AvailableFoods from "../Page/AvailableFoods";
import ManageFood from "../Page/ManageFood";
import SingleFood from "../Page/SingleFood";
import UpdateFood from "../Page/UpdateFood";
import FoodRequest from "../Page/FoodRequest";
import ManageFoodRequest from "../Page/ManageFoodRequest";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/available-foods",
        element: (
          <PrivateRoute>
            <AvailableFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-food",
        element: (
          <PrivateRoute>
            <ManageFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <SingleFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/food/${params.id}`),
      },
      {
        path: "/ufood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/food/${params.id}`),
      },
      {
        path: "/food-request",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-food-request/:id",
        element: (
          <PrivateRoute>
            <ManageFoodRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default MainRouter;

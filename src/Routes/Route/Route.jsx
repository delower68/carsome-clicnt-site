import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layouts/Main";
import AllCars from "../../pages/AllCars/AllCars";
import Categories from "../../pages/Home/Categories/Categories";
import ElectricCarCategory from "../../pages/Home/ElectricCarCategory/ElectricCarCategory";
import Home from "../../pages/Home/Home/Home";
import LuxuryCarCategory from "../../pages/Home/LuxuryCarCategory/LuxuryCarCategory";
import MicrobusCategorory from "../../pages/Home/MicrobusCategorory/MicrobusCategorory";
import Login from "../../pages/Shared/Login/Login";
import SignUp from "../../pages/Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allCars",
        element: <PrivateRoute><AllCars /></PrivateRoute>,
      },
      {
        path: "/allMicrobus",
        element: <PrivateRoute><MicrobusCategorory /></PrivateRoute>,
      },
      {
        path: "/luxuryCar",
        element: <PrivateRoute><LuxuryCarCategory /></PrivateRoute>,
      },
      {
        path: "/electricCar",
        element: <PrivateRoute><ElectricCarCategory /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

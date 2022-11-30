import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import ManageBuyer from "../../Dashboard/ManageBuyer/ManageBuyer";
import MyBookings from "../../Dashboard/MyBookings/MyBookings";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import Payment from "../../Dashboard/Payment/Payment";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashBoardLayout from "../../Layouts/DashBoardLayout";
import Main from "../../Layouts/Main";
import AllCars from "../../pages/AllCars/AllCars";
import ElectricCarCategory from "../../pages/Home/ElectricCarCategory/ElectricCarCategory";
import Home from "../../pages/Home/Home/Home";
import LuxuryCarCategory from "../../pages/Home/LuxuryCarCategory/LuxuryCarCategory";
import MicrobusCategorory from "../../pages/Home/MicrobusCategorory/MicrobusCategorory";
import Blogs from "../../pages/Shared/Blogs/Blogs";
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
        element: (
          <PrivateRoute>
            <AllCars />
          </PrivateRoute>
        ),
      },
      {
        path: "/allMicrobus",
        element: (
          <PrivateRoute>
            <MicrobusCategorory />
          </PrivateRoute>
        ),
      },
      {
        path: "/luxuryCar",
        element: (
          <PrivateRoute>
            <LuxuryCarCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/electricCar",
        element: (
          <PrivateRoute>
            <ElectricCarCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashBoardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/manageBuyerSeller",
        element: <ManageBuyer />,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`https://car-some-server.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);

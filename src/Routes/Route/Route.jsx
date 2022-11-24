import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Shared/Login/Login";
import SignUp from "../../pages/Shared/SignUp/SignUp";

export  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
        
    }
])
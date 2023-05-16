import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import BookService from "../Pages/BookService/BookService";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<SignUp></SignUp>
    },
    {
        path:'/bookings',
        element:<PrivateRoute><BookService></BookService></PrivateRoute>
    },
    {
        path:'/checkout/:id',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params}) => fetch(`https://cars-repairing-workshop-server.vercel.app/services/${params.id}`)
    }
],
  },
]);

export default router;

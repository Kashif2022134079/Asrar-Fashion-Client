import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BurqaDetails from "../pages/Home/BurqaDetails/BurqaDetails";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/DashBoard/ManageItem/ManageItem";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payments from "../pages/DashBoard/Paymnets/Payments";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import About from "../pages/About/About";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'burqaDetails/:id',
          element: <BurqaDetails></BurqaDetails>,
          loader: ({params})=>fetch(`https://asrar-fashion1.vercel.app/burqas/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path: 'about',
          element : <About></About>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children : [
        // users related routes
        {
          path: 'userHome',
          element:<UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path : 'payment',
          element: <Payments></Payments>
        },
        {
          path: 'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },

        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path : 'addItems',
          element : <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><ManageItem></ManageItem></AdminRoutes>
        },
        {
          path : 'updateItem/:id',
          element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
          loader : ({params}) => fetch(`https://asrar-fashion1.vercel.app/burqas/${params.id}`)
        },
        {
          path: 'allUsers',
          element:<AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
        }
      ]
    }
  ]);

  export default router
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import AddJob from './Components/Pages/AddJob/AddJob';
import MyPOstedJob from './Components/Pages/MyPostedJob.jsx/MyPOstedJob';
import Mybids from './Components/Pages/MyBids/Mybids';
import BidRequest from './Components/Pages/BidRequest/BidRequest';
import Login from './Components/UserLoginANdRegister/Login';
import Register from './Components/UserLoginANdRegister/Register';
import AuthProvider from './firebase/AuthProvider';
import { Toaster } from 'react-hot-toast';
import CommonLogin from './Components/CommonLogin/CommonLogin';
import Footer from './Components/Pages/Footer/Footer';
import Test from './Components/Pages/Test/Test';
import Brand from './Components/Pages/Test/Brand';
import Services from './Components/Services/Services';
import ShowCategories from './Components/Services/ShowCategories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/addJob",
      element: <AddJob></AddJob>
    },
    {
      path: "/myPostedJob",
      element: <MyPOstedJob></MyPOstedJob>
    },
    {
      path: "/myBids",
      element: <Mybids></Mybids>
    },
    {
      path: "/bidRequest",
      element: <BidRequest></BidRequest>
    },

    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/commonlogin",
      element: <CommonLogin></CommonLogin>
    },
    {
      path: "/footer",
      element: <Footer></Footer>
    },
    {
      path: "/services/:category",
      element: <Services></Services>,
      loader: () => fetch('http://localhost:3000')
    },
    {
      path: "/showCategories/:category",
      element: <ShowCategories></ShowCategories>,
      loader: () => fetch('http://localhost:3000/jobs')

    }
      ,
    {
      path: "/test/:category",
      element: <Test></Test>
    },
    {
      path: "/brand/:category",
      element: <Brand></Brand>,
      loader: () => fetch('http://localhost:3000/jobs')
    }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Banner from './Pages/Home/Banner';
import MainLayout from './Mainlayout/MainLayout'
import AuthProvider from './Provider/AuthProvider';
import Login from './Log/Reg/Login';
import Registration from './Log/Reg/Registration';
import AboutUs from './Pages/Aboutus/AboutUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/banner",
        element:<Banner></Banner>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/registration",
        element:<Registration></Registration>,
      },
      {
        path: "/aboutus",
        element:<AboutUs></AboutUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='max-w-screen-xl m-auto'>
 <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
 </div>
  </React.StrictMode>,
)

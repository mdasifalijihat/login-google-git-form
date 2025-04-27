import {
    createBrowserRouter,  
  } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Login/Register";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h2> This is error page </h2>,
      children:[
        {index:true, Component: Home},
        {path:'/login', Component: Login},
        {path: "/register", Component: Register}, 
      ]
    },
  ]); 
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login></Login>,
   },
]);

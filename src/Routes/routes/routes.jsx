import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home";
import Food from "../../Pages/Food/Food";
import ProductPage from "../../Pages/product";

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
         {
            path: "/food",
            element: <Food />,
         },
         {
            path: "/food/:id",
            element: <ProductPage></ProductPage>,
         },
      ],
   },
   {
      path: "/login",
      element: <Login></Login>,
   },
]);

import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home";

import ProductPage from "../../Pages/product";
import Category from "../../Pages/Category";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import SignUp from "../../Pages/register/register";
import SignIn from "../../Pages/Login";

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
            path: "/category/:categoryId",
            element: <Category></Category>,
         },
         {
            path: "/category/:category/:subcategoryId",
            element: <ProductPage></ProductPage>,
         },
         {
            path: "/category/:category/:subcategoryId/:productId",
            element: <ProductDetails></ProductDetails>,
         },
         {
            path: "/sign-up",
            element: <SignUp></SignUp>,
         },
         {
            path: "/sign-in",
            element: <SignIn></SignIn>,
         },
      ],
   },
]);

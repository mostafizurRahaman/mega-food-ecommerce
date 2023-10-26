import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./Context/CartContext/index.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <CartProvider>
               <App />
            </CartProvider>
         </AuthProvider>
      </QueryClientProvider>
   </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./Context/CartContext/index.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <CartProvider>
            <App />
         </CartProvider>
      </QueryClientProvider>
   </React.StrictMode>
);

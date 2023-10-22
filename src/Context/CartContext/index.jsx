import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      setCart(savedCart);
   }, [setCart]);
   const cardInfo = { cart, setCart };
   return (
      <CartContext.Provider value={cardInfo}>{children}</CartContext.Provider>
   );
};

export default CartProvider;

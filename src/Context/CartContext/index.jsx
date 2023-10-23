import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   const [showCart, setShowCart] = useState(false);
   const [total, setTotal] = useState(0);

   const user = {
      role: "user",
   };

   useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      const sum = cart?.reduce((a, b) => {
         console.log(a, b);
         return a + b.price * b.quantity;
      }, 0);
      setTotal(sum);
      setCart(savedCart);
   }, [cart]);

   const cardInfo = { cart, setCart, showCart, setShowCart, total };
   return (
      <CartContext.Provider value={cardInfo}>{children}</CartContext.Provider>
   );
};

export default CartProvider;

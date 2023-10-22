/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiPlus, FiShoppingBag } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import toast from "react-hot-toast";
// eslint-disable-next-line react/prop-types
const CheckOutSingleItems = ({ product }) => {
   const { cart, setCart } = useContext(CartContext);
   const [item, setItem] = useState({});
   const [user, setUser] = useState({ role: "user" });
   const [quantity, setQuantity] = useState(0);

   const IncrementQuantity = (_id) => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      console.log("first", savedCart);
      if (quantity < product.stock) {
         setQuantity(quantity + 1);
         const isExist = savedCart?.find((i) => i._id === _id);
         const rest = savedCart?.filter((i) => i._id !== _id) || [];
         console.log(isExist);
         console.log(rest);
         if (!isExist) {
            setCart([...rest, { _id: _id, quantity: 1 }]);
            localStorage.setItem(
               "cart",
               JSON.stringify([...rest, { _id: _id, quantity: 1 }])
            );
         } else {
            setQuantity(isExist.quantity + 1);
            setCart([
               ...rest,
               { _id: isExist._id, quantity: isExist.quantity + 1 },
            ]);
            localStorage.setItem(
               "cart",
               JSON.stringify([
                  ...rest,
                  { _id: isExist._id, quantity: isExist.quantity + 1 },
               ])
            );
         }
         console.log("last", cart);
      }
   };

   const DecrementQuantity = (_id) => {
      if (quantity > 0) {
         const savedCart = JSON.parse(localStorage.getItem("cart"));
         const isExist = savedCart?.find((i) => i._id === _id);
         const rest = savedCart.filter((i) => i._id !== _id) || [];
         if (isExist.quantity === 1) {
            setQuantity(0);
            setCart([...rest]);
            localStorage.setItem("cart", JSON.stringify([...rest]));
         } else {
            setQuantity(isExist.quantity - 1);
            const newCart = [
               ...rest,
               { _id: isExist._id, quantity: isExist.quantity - 1 },
            ];
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
         }
      } else {
         toast.error("quantity shouldn't be 0");
      }
   };

   const removeFromCart = (_id) => {
      const rest = cart.filter((i) => i._id !== _id);
      setCart([...rest]);
      localStorage.setItem("cart", JSON.stringify([...rest]));
   };

   useEffect(() => {
      const currentItem = cart?.find((i) => i._id === product._id);
      setItem(currentItem);
      setQuantity(currentItem?.quantity);
   }, [product._id, cart]);

   return (
      <div
         key={product._id}
         className="flex items-center justify-between border-b  border-gray-300"
      >
         <div className="flex flex-col gap-1 items-center justify-center px-3 h-[100px] ">
            <button
               disabled={quantity === product.stock}
               onClick={() => IncrementQuantity(product._id)}
               className="w-5 h-5 text-white flex items-center justify-center rounded-full bg-primary text-xl"
            >
               <FiPlus size={20}></FiPlus>
            </button>
            <span>{item?.quantity}</span>
            <button
               disabled={!quantity}
               onClick={() => DecrementQuantity(product._id)}
               className="w-5 h-5 text-white flex items-center justify-center rounded-full bg-primary text-xl"
            >
               <HiMinus size={20}></HiMinus>
            </button>
         </div>
         <div>
            <img
               src={product.thumbnail}
               className="object-contain w-10 h-auto "
               alt=""
            />
         </div>
         <div className="text-center">
            <h3 className="uppercase text-sm font-semibold ">{product.name}</h3>
            <div className="text-sm mt-1">
               {user?.role === "user" ? (
                  <>
                     <p>
                        ${product.price} x {item?.quantity}
                     </p>
                  </>
               ) : (
                  <p>
                     ${product.price} x {item?.quantity}
                  </p>
               )}
            </div>
         </div>
         <div className="px-3">
            <button onClick={() => removeFromCart(product._id)}>
               <GrFormClose></GrFormClose>
            </button>
         </div>
      </div>
   );
};

export default CheckOutSingleItems;

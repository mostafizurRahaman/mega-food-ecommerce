import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { accessToken, baseURL } from "../../Configs/libs";
import CheckOutSingleItems from "../CheckOutSingleItems/CheckOutSingleItems";

const CartDrawer = () => {
   const { cart, showCart, setShowCart } = useContext(CartContext);
   const [total, setTotal] = useState(0);

   const [ids, setIds] = useState([]);
   const { data: products = [], isLoading } = useQuery({
      queryKey: ["products", ids.length],
      queryFn: async () => {
         if (ids?.length) {
            const res = await fetch(`${baseURL}/product/cart`, {
               method: "POST",
               headers: {
                  "content-type": "application/json",
                  authorization: accessToken,
               },
               body: JSON.stringify({ ids: ids, cart: cart }),
            });
            const data = await res.json();
            return data.data;
         }
         return [];
      },
   });
   // console.log(products);

   useEffect(() => {
      const cartedIds = cart?.map((i) => i._id);
      const sum = cart?.reduce((a, b) => {
         console.log(a, b);
         return a + b.price * b.quantity;
      }, 0);
      setTotal(sum);

      setIds(cartedIds || []);
   }, [cart]);

   return (
      <div
         className={` ${
            showCart ? "right-0" : "-right-[999px]"
         } duration-700 top-[90px]  z-[9999] w-[350px] overflow-hidden  rounded-3xl fixed bg-secondary h-[80vh] flex flex-col justify-between `}
      >
         <div className="bg-primary p-5  round-t-3xl text-white  flex items-center justify-between ">
            <div className="flex items-center gap-3">
               <FiShoppingBag size={25}></FiShoppingBag>
               <h1 className="text-lg font-medium uppercase">
                  <span> {cart?.length} Items</span>
               </h1>
            </div>
            <div onClick={() => setShowCart(false)}>
               <AiOutlineCloseCircle size={25}></AiOutlineCloseCircle>
            </div>
         </div>
         <div className="flex-grow overflow-y-auto ">
            {products?.map((product) => (
               <CheckOutSingleItems
                  key={product?._id}
                  product={product}
               ></CheckOutSingleItems>
            ))}
         </div>
         <div className="bg-primary  text-white p-5  round-t-3xl  flex items-center justify-between ">
            <h3>Total: ${total} tk</h3>
            <button className="px-3 rounded-md py-2  bg-white  text-black">
               {" "}
               checkout Now
            </button>
         </div>
      </div>
   );
};

export default CartDrawer;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaRegUser } from "react-icons/fa6";
import { RiNotification3Line } from "react-icons/ri";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { CartContext } from "../../Context/CartContext";

const Navbar2 = ({ setIsOpen }) => {
   const [user, setUser] = useState("");
   const { cart, setShowCart, showCart } = useContext(CartContext);

   return (
      <nav
         className={`flex  flex-wrap items-center bg-primary justify-center md:justify-between h-24 md:h-20 px-5 md:px-10   fixed w-full  top-0 z-[999]  shadow-2xl `}
      >
         <div className="w-1/2  md:w-auto md:order-1">
            <div className="text-white font-bold uppercase text-2xl flex gap-3 items-center justify-starts ">
               <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className={`  p-[5px] rounded-sm hover:bg-secondary text-secondary hover:text-primary  duration-500 cursor-pointer   font-bold
                `}
               >
                  <FaBarsStaggered size={24}></FaBarsStaggered>
               </div>
               <Link to="/">
                  <h2>Mega Food</h2>
               </Link>
            </div>
         </div>
         <div className=" order-3 w-full md:order-2  md:w-[50%] lg:[60%] rounded-md relative  ">
            <input
               type="text"
               placeholder="search products"
               name="search"
               className="w-full px-3 py-3 h-full rounded-md  font-light "
            />
            <IoMdSearch
               className="text-primary absolute top-1/2 right-[10px] -translate-y-1/2"
               size={25}
            ></IoMdSearch>
         </div>
         <div className=" w-1/2 md:w-auto md:order-3 flex items-center justify-end gap-5 text-secondary font-bold">
            <RiNotification3Line size={25}></RiNotification3Line>

            <div className="relative" onClick={() => setShowCart(!showCart)}>
               <TbShoppingCart size={26}></TbShoppingCart>
               <span className="absolute -top-1 -right-2  bg-red-500 text-secondary w-5  h-5 rounded-full flex  items-center justify-center text-xs ">
                  {cart?.length || 0}
               </span>
            </div>
            <Link to="/sign-in">
               <FaRegUser size={24}></FaRegUser>
            </Link>
         </div>
      </nav>
   );
};

export default Navbar2;

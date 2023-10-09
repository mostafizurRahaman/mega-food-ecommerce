/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { FaBarsStaggered, FaRegUser } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiNotification2Line, RiNotification3Line } from "react-icons/ri";
import { TbShoppingCart } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
const Navbar2 = ({ setIsOpen }) => {
   const [user, setUser] = useState("");
   const [show, setShow] = useState(false);

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
               <h2>Mega Food</h2>
            </div>
         </div>
         <div className=" order-3 w-full md:order-2  md:w-[60%] rounded-md relative  ">
            <input
               type="text"
               placeholder="search products"
               name="search"
               className="w-full px-3 py-2 h-full rounded-md  font-light "
            />
            <IoMdSearch
               className="text-primary absolute top-1/2 right-[10px] -translate-y-1/2"
               size={25}
            ></IoMdSearch>
         </div>
         <div className=" w-1/2 md:w-auto md:order-3 flex items-center justify-end gap-5 text-secondary font-bold">
            <RiNotification3Line size={25}></RiNotification3Line>
            <TbShoppingCart size={26}></TbShoppingCart>
            <FaRegUser size={24}></FaRegUser>
         </div>
      </nav>
   );
};

export default Navbar2;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../../Components/Navbar";
import Siderbar from "../../Components/Sidebar";
const MainLayout = () => {
   const [isOpen, setIsOpen] = useState(true);
   return (
      <div className="">
         <Navbar2 setIsOpen={setIsOpen}></Navbar2>
         <div className={` flex items-start  relative  `}>
            <div
               className={`min-w-[230px] duration-300 overflow-y-scroll bg-secondary shadow-[5px_5px_5px_#ddd]  z-[99]  p-3 min-h-screen  max-h-screen top-16  fixed  left-0   ${
                  !isOpen
                     ? "md:absolute top-20   transition-all left-[-999px]"
                     : "md:fixed "
               } `}
            >
               <Siderbar></Siderbar>
            </div>
            {isOpen && (
               <div className="hidden md:block  md:min-w-[230px] duration-500 transition-all"></div>
            )}
            <div className={`w-full py-20  ${isOpen && "md:calc-width"}`}>
               <div className="h-screen ">
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainLayout;

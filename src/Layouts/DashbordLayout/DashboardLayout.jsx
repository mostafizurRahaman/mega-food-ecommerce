import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   const { isOpen } = useContext(AuthContext);
   return (
      <div className={` flex items-start  relative  `}>
         <div
            className={`min-w-[220px] box-border block duration-300 overflow-y-scroll bg-secondary shadow-[5px_5px_5px_5px_#ddd] m-0  z-[99]  min-h-screen  max-h-screen top-[80px]  fixed  left-0   ${
               !isOpen
                  ? "md:absolute top-[80px]   transition-all left-[-999px] pr-0"
                  : "md:fixed pr-0"
            } `}
         >
            <div className="flex  flex-col w-full m-0  uppercase">
               <Link
                  className="px-5 py-2   text-black hover:bg-primary hover:text-white text-sm "
                  to="/dashboard/"
               >
                  My Profile
               </Link>
               <Link
                  className="px-5 py-2  border-t-[1.4px] border-t-gray-500 text-black hover:bg-primary hover:text-white text-sm "
                  to="/dashboard/orders"
               >
                  My Orders
               </Link>
               <Link
                  className="px-5 py-2  border-t-[1.4px] border-t-gray-500 text-black hover:bg-primary hover:text-white text-sm "
                  to="/dashboard/change-password"
               >
                  Change Password
               </Link>
               <Link
                  className="px-5 py-2  border-t-[1.4px] border-t-gray-500 text-black hover:bg-primary hover:text-white text-sm "
                  to="/dashboard/my-address"
               >
                  my address
               </Link>
            </div>
         </div>
         {isOpen && (
            <div className="hidden md:block  md:min-w-[220px] duration-500 transition-all"></div>
         )}
         <div className={`w-full py-20  ${isOpen && "md:calc-width"}`}>
            <div className="h-screen py-5 px-5">
               <Outlet></Outlet>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;

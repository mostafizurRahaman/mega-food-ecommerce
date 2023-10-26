import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../../Components/Navbar";
import Siderbar from "../../Components/Sidebar";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const MainLayout = () => {
   const { setIsOpen } = useContext(AuthContext);
   return (
      <div className="">
         <Navbar2 setIsOpen={setIsOpen}></Navbar2>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayout;

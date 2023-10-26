import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const ProfileCard = () => {
   const { user, logOut } = useContext(AuthContext);
   return (
      <div className=" absolute top-12 group-hover:translate-x-[40%] duration-300 ease-in-out group-hover:right-0 -right-[999px] bg-white rounded-xl w-[200px] h-[230px]  shadow-[2px_2px_2px_2px_#ddd] ">
         <h1 className="text-black capitalize  text-[17px] font-medium p-5  ">
            {user?.firstName} {user.lastName}
         </h1>
         <div className="flex items-center justify-start flex-col text-sm capitalize ">
            <Link
               className=" px-3 w-full hover:text-white text-black  py-1  hover:bg-blue-500"
               to="/dashboard"
            >
               Dashboard
            </Link>
            <Link
               className=" px-3 w-full hover:text-white text-black  py-1  hover:bg-blue-500"
               to="/dashboard"
            >
               My orders
            </Link>
            <Link
               className=" px-3 w-full hover:text-white text-black  py-1  hover:bg-blue-500"
               to="/dashboard"
            >
               My Address{" "}
            </Link>
            <Link
               className="px-3 w-full hover:text-white text-black  py-1  hover:bg-blue-500"
               to="/dashboard"
            >
               Change Password
            </Link>
         </div>
         <div className="flex px-3 mt-2 items-start justify-start pb-5">
            <FiLogOut
               size={22}
               onClick={logOut}
               className=" inline-block text-red-500"
            ></FiLogOut>
         </div>
      </div>
   );
};

export default ProfileCard;

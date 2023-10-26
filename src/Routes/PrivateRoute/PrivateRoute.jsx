/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <Loading></Loading>;
   }

   if (user?.email && user?.status === "active") {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

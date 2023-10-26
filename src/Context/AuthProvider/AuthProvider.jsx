/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { accessToken, baseURL } from "../../Configs/libs";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isOpen, setIsOpen] = useState(true);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch(`${baseURL}/user/me`, {
         headers: {
            "content-type": "application/json",
            authorization: accessToken,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.status === "success") {
               setLoading(false);
               setUser(data.data);
            } else {
               setLoading(false);
            }
         })
         .catch((err) => {
            console.log(err);
            setLoading(false);
         });
   }, []);

   const logOut = () => {
      localStorage.removeItem("accessToken");
      setUser(null);
   };
   const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      logOut,
      isOpen,
      setIsOpen,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;

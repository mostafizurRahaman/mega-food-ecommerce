import { useNavigate } from "react-router-dom";
import ActionButton from "../Buttons/ActionButton";
import { useState } from "react";

const Banner = () => {
   const [banner, setBanner] = useState({
      title: "",
      banner:
         "https://res.cloudinary.com/dhsy38h5r/image/upload/v1697435846/zyneydrobczoqcqew3tg.webp",
      path: "",
   });
   const navigate = useNavigate();

   const handleAction = (path) => {
      navigate(path);
   };

   const styles = {
      background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${banner.banner}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
   };

   return (
      <div
         className=" p-10 h-[75vh]   w-full flex items-center justify-start   "
         style={styles}
      >
         <div className=" lg:w-2/5 flex gap-3 flex-col p-3 bg-opacity-75 rounded-md bg-white  md:bg-transparent">
            <h2 className="text-4xl font-medium capitalize mb-3 ">
               Best Difference Type of glossary store
            </h2>
            <p className="text-xl  font-normal ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Obcaecati aliquam a placeat architecto magni dicta blanditiis
            </p>
            <ActionButton
               onClick={() => handleAction(banner.path)}
               containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg w-[170px]  inline mt-5 "
            >
               Book now
            </ActionButton>
         </div>
      </div>
   );
};

export default Banner;

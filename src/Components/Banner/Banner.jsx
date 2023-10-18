/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ActionButton from "../Buttons/ActionButton";

const Banner = ({ banner }) => {
   const navigate = useNavigate();

   const { title, offerPath, ButtonText, imageURL, description } = banner;

   const styles = {
      background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${imageURL}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      objectFit: "cover",
      // width: "100%"
   };

   const handleAction = () => {
      navigate(offerPath);
   };

   return (
      <div
         className="  p-10   flex items-center justify-start   "
         style={styles}
      >
         <div className=" lg:w-2/5 flex gap-3 flex-col p-3 bg-opacity-75 rounded-md bg-white  md:bg-transparent">
            <h2 className="text-4xl font-medium capitalize mb-3 ">{title}</h2>
            <p className="text-xl  font-normal ">{description}</p>
            <ActionButton
               handleAction={handleAction}
               containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg   inline-block w-auto mr-auto mt-5 "
            >
               {ButtonText}
            </ActionButton>
         </div>
      </div>
   );
};

export default Banner;

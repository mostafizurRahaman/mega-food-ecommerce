/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ActionButton from "../Buttons/ActionButton";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

const Banner = ({ banner }) => {
   const navigate = useNavigate();

   const { title, offerId, offerType, buttonText, imageURL, description } =
      banner;

   const styles = {
      background: `linear-gradient(90deg, rgba(48, 97, 221, 0),rgba(48, 97, 221, 0)), url(${imageURL}) no-repeat`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      objectFit: "cover",
      // width: "100%"
   };
   const { data: offerItem = {} } = useQuery({
      queryKey: ["offerItem", offerId, offerType],
      queryFn: async () => {
         if (offerId && offerId) {
            const res = await fetch(`${baseURL}/${offerType}/${offerId}`);
            const data = await res.json();
            console.log("data fetched", data);
            return data.data;
         }
         return {};
      },
   });

   const handleAction = () => {
      if (offerType === "category") {
         return navigate(`/category/${offerItem?._id}`);
      }
      if (offerType === "sub-category") {
         return navigate(
            `/category/${offerItem.category.id}/${offerItem?._id}`
         );
      }
      if (offerType === "product") {
         return navigate(
            `/category/${offerItem.category.id}/${offerItem.subCategory.id}/${offerItem?._id}`
         );
      }
   };

   return (
      <div
         className="  py-14 px-10  flex items-center justify-start   "
         style={styles}
      >
         <div className=" lg:w-2/5 flex gap-3 flex-col p-3 bg-opacity-75 rounded-md bg-white  ">
            <h2 className="text-4xl font-medium capitalize mb-3 ">{title}</h2>
            <p className="text-xl  font-normal ">{description}</p>
            {offerItem.name && (
               <ActionButton
                  handleAction={handleAction}
                  containerStyles="bg-primary text-lg text-secondary font-semibold rounded-lg   inline-block w-auto mr-auto mt-5 capitalize"
               >
                  {buttonText}
               </ActionButton>
            )}
         </div>
      </div>
   );
};

export default Banner;

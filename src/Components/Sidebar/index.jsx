import LinkNav from "../LinkNav";
import SummeryDetails from "../SummeryDetails/SummeryDetails";
import ProfileInfo from "../ProfileInfo";
import { GiFruitBowl } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { FaMosquito } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
const Siderbar = () => {
   return (
      <div className=" w-full pb-3  ">
         <ProfileInfo></ProfileInfo>
         <div className="px-2 mt-5 capitalize  ">
            <div className="flex  flex-col gap-2 mb-2">
               <LinkNav
                  path="/favourites"
                  title="Favourites"
                  icon={
                     <AiFillHeart
                        size={17}
                        className="text-red-500"
                     ></AiFillHeart>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/mosquito_defense"
                  title="Mosquito Defense"
                  icon={
                     <FaMosquito size={17} className="text-white"></FaMosquito>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/dhamaka_offer"
                  title="dhamaka Offer"
                  icon={
                     <BiSolidOffer
                        size={17}
                        className="text-white"
                     ></BiSolidOffer>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/popular"
                  title="popular"
                  icon={
                     <BsFillBagCheckFill
                        size={17}
                        className="text-white"
                     ></BsFillBagCheckFill>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/flash_sales"
                  title="flash sales"
                  icon={
                     <IoIosFlash size={17} className="text-white"></IoIosFlash>
                  }
                  style="text-sm"
               ></LinkNav>
            </div>
            <SummeryDetails
               groupName="food"
               className="h-0"
               icon={<GiFruitBowl size={16}></GiFruitBowl>}
            >
               <LinkNav
                  path="/fresh_fruits"
                  title="fresh fruits"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/fresh_vegetables"
                  title="fresh_vegetables"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/chicken"
                  title="chicken & Poultry"
                  style="text-sm"
               ></LinkNav>
               <LinkNav path="/fish" title="fish" style="text-sm"></LinkNav>
               <LinkNav path="/meat" title="meat" style="text-sm"></LinkNav>
               <LinkNav path="/spices" title="spices" style="text-sm"></LinkNav>
               <LinkNav
                  path="/salt_sugar"
                  title="salt & Sugar"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
         </div>
      </div>
   );
};

export default Siderbar;

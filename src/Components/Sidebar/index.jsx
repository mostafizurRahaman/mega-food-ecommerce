import LinkNav from "../LinkNav";
import SummeryDetails from "../SummeryDetails/SummeryDetails";
import { GiFruitBowl, GiVacuumCleaner } from "react-icons/gi";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { FaMosquito, FaToolbox } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import foodCategories from "../../Configs/demodata";
const Siderbar = () => {
   return (
      <div className=" w-full   ">
         {/* <ProfileInfo></ProfileInfo> */}
         <div className="px-2 my-5 mb-20 capitalize  ">
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
                     <FaMosquito
                        size={17}
                        className="text-accent "
                     ></FaMosquito>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/dhamaka_offer"
                  title="dhamaka Offer"
                  icon={
                     <BiSolidOffer
                        size={17}
                        className="text-accent "
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
                        className="text-accent"
                     ></BsFillBagCheckFill>
                  }
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/flash_sales"
                  title="flash sales"
                  icon={
                     <IoIosFlash size={17} className="text-accent"></IoIosFlash>
                  }
                  style="text-sm"
               ></LinkNav>
            </div>
            <SummeryDetails
               groupName="food"
               path="/food"
               icon={<GiFruitBowl size={16}></GiFruitBowl>}
            >
               {foodCategories.map((i, idx) => (
                  <LinkNav
                     key={idx}
                     path={`/food${i.path}`}
                     title={i.title}
                     style="text-sm"
                  ></LinkNav>
               ))}
            </SummeryDetails>
            <SummeryDetails
               groupName="cleaning supplies"
               icon={<GiVacuumCleaner size={16}></GiVacuumCleaner>}
            >
               <LinkNav
                  path="/dish-wash"
                  title="Dishwashing Supplies"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/laundry"
                  title="laundry"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/paper-products"
                  title="paper products"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/pest-control"
                  title="pest control"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/floor-glass-cleaners"
                  title="floor glass cleaners"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/cleaning-accessories"
                  title="cleaning accessories"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/air-freshners"
                  title="air freshners"
                  style="text-sm"
               ></LinkNav>
               <LinkNav path="/snacks" title="snacks" style="text-sm"></LinkNav>
               <LinkNav
                  path="/trash-bags"
                  title="Disposables & Trash Bags"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/shoe-care"
                  title="shoe care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/trash-bin-basket"
                  title="trash bin & basket"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
            <SummeryDetails
               groupName="personal care"
               icon={<FaToolbox size={16}></FaToolbox>}
            >
               <LinkNav
                  path="/female-care"
                  title="female's care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/male-care"
                  title="Men's care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/hand-wash"
                  title="hand wash"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/tissue-wipes"
                  title="tissue wipes"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/oral-care"
                  title="oral care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/skin-care"
                  title="skin-care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/talcom-powder"
                  title="talcom powder"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/hair-color"
                  title="hair color"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
            <SummeryDetails
               groupName="hygiene"
               icon={<FaToolbox size={16}></FaToolbox>}
            >
               <LinkNav
                  path="/keto-food"
                  title="keto food"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/antiseptics"
                  title="antiseptics"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/handwash-handrub"
                  title="handwash handrub"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/herbal-products"
                  title="herbal products"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/food-supplements"
                  title="food supplements"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/face-masks-safety"
                  title="face masks safety"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/family-planning"
                  title="family planning"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/mouthwashes"
                  title="mouthwashes"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/adult-diapers"
                  title="adult diapers"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/multipurpose-spray"
                  title="multipurpose spray"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/medical-devices"
                  title="medical devices"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
            <SummeryDetails
               groupName="baby care"
               icon={<FaToolbox size={16}></FaToolbox>}
            >
               <LinkNav
                  path="/diapers"
                  title="diapers"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/baby-food"
                  title="baby food"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/bath-skincare"
                  title="bath skincare"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/baby-oral-care"
                  title="baby oral care"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/newborn-essentials"
                  title="newborn essentials"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/baby-accessories"
                  title="baby accessories"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/feeders"
                  title="feeders"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
            <SummeryDetails
               groupName="home kitchen"
               icon={<AiFillHome size={16}></AiFillHome>}
            >
               <LinkNav
                  path="/kitchen-accessories"
                  title="kitchen accessories"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/kitchen-appliances"
                  title="kitchen appliances"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/lights-electrical"
                  title="lights electrical"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/tools-hardware"
                  title="tools hardware"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/baskets-buckets"
                  title="baskets buckets"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/box-container"
                  title="box container"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/gardening"
                  title="gardening"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/rack-organizer"
                  title="rack organizer"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/disposables"
                  title="disposables"
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
            <SummeryDetails
               groupName="stationery office"
               icon={<AiFillHome size={16}></AiFillHome>}
            >
               <LinkNav
                  path="/office-electronics"
                  title="office electronics"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/organizers"
                  title="organizers"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/writing"
                  title="writing and Printing"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/paper-supplies"
                  title="paper supplies"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/school-supplies"
                  title="school supplies"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/arts-crafts"
                  title="arts crafts "
                  style="text-sm"
               ></LinkNav>
            </SummeryDetails>
         </div>
      </div>
   );
};

export default Siderbar;

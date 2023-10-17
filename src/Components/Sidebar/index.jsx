import LinkNav from "../LinkNav";
import SummeryDetails from "../SummeryDetails/SummeryDetails";

import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
const Siderbar = () => {
   const { data: OurCategories = [] } = useQuery({
      queryKey: ["OurCategories"],
      queryFn: async () => {
         const res = await fetch(`${baseURL}/category`);
         const data = await res.json();
         console.log(data);
         return data.data.categories;
      },
   });

   return (
      <div className=" w-full   ">
         {/* <ProfileInfo></ProfileInfo> */}
         <div className="px-2 my-5 mb-20 capitalize  ">
            <div className="flex  flex-col gap-2 mb-2">
               <LinkNav
                  path="/favourites"
                  title="Favourites"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/mosquito_defense"
                  title="Mosquito Defense"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/dhamaka_offer"
                  title="dhamaka Offer"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/popular"
                  title="popular"
                  style="text-sm"
               ></LinkNav>
               <LinkNav
                  path="/flash_sales"
                  title="flash sales"
                  style="text-sm"
               ></LinkNav>
            </div>

            {OurCategories?.map((i) => (
               <SummeryDetails
                  key={i._id}
                  groupName={i.name}
                  path={`/category/${i._id}`}
                  icon={i.logo}
               >
                  {i?.subCategories?.map((sub) => (
                     <LinkNav
                        key={sub._id}
                        title={sub.name}
                        icon={i.logo}
                        path={`/category/${i._id}/${sub._id}`}
                     ></LinkNav>
                  ))}
               </SummeryDetails>
            ))}
         </div>
      </div>
   );
};

export default Siderbar;

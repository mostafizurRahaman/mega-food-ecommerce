import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Banner from "../Banner/Banner";
import { baseURL } from "../../Configs/libs";
import { useQuery } from "@tanstack/react-query";

const BannerSection = () => {
   const { data: banners = [] } = useQuery({
      queryKey: ["banners"],
      queryFn: async () => {
         const res = await fetch(`${baseURL}/banner`);
         const data = await res.json();
         return data.data.banners;
      },
   });
   return (
      <div className="">
         <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-full"
         >
            {banners.map((banner) => (
               <SwiperSlide key={banner._id}>
                  <Banner banner={banner}></Banner>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default BannerSection;

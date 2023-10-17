import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import CategoryCard from "../CategoryCard/CategoryCard";

const PopularCategorySection = () => {
   const { data: subCategories = [] } = useQuery({
      queryKey: ["subCategories"],
      queryFn: async () => {
         const res = await fetch(`${baseURL}/sub-category`);
         const data = await res.json();
         console.log(data);
         return data.data.subCategories;
      },
   });
   console.log(subCategories);

   return (
      <div className="py-10">
         <h1 className="text-3xl font-semibold text-black uppercase text-center ">
            Popular Categories
         </h1>
         <div className="grid md:grid-cols-3  lg:grid-cols-4 grid-cols-2 gap-5 px-10 py-10">
            {subCategories?.map((i) => (
               <CategoryCard
                  key={i._id}
                  _id={i._id}
                  title={i.name}
                  image={i.banner}
                  path={`/category/${i?.category?.id}/${i?._id}`}
               ></CategoryCard>
            ))}
         </div>
      </div>
   );
};

export default PopularCategorySection;

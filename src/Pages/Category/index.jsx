import { useParams } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import Loading from "../../Components/Loading";

const Category = () => {
   const { categoryId } = useParams();
   console.log(categoryId);
   const { data: subCategories = [], isLoading } = useQuery({
      queryKey: ["subCategories", categoryId],
      queryFn: async () => {
         if (categoryId) {
            const res = await fetch(`${baseURL}/category/p/${categoryId}`);
            const data = await res.json();
            console.log("inner category tanStack", data);
            return data.data.subCategories;
         }
         return [];
      },
   });
   console.log("category page", subCategories);

   return (
      <div className="mt-10 px-5 relative">
         {isLoading && (
            <Loading></Loading>
         )}
         <h2 className="md:text-2xl lg:text-3xl italic  text-primary  underline mb-1 px-3  ">
            Category
         </h2>
         <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3  py-5 ">
            {subCategories.map((i, idx) => (
               <CategoryCard
                  key={idx}
                  title={i.name}
                  path={`/category/${categoryId}${i.path}`}
                  _id={i._id}
                  image={i.banner}
               ></CategoryCard>
            ))}
         </div>
      </div>
   );
};

export default Category;

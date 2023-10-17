import { BiHome } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../Components/productCard/ProductCard";

import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";

const ProductPage = () => {
   const location = useLocation();
   const { subcategoryId } = useParams();

   const { data: products = [],  } = useQuery({
      queryKey: ["products", subcategoryId],
      queryFn: async () => {
         const res = await fetch(`${baseURL}/sub-category/${subcategoryId}`);

         const data = await res.json();
         return data.data.products;
      },
   });

   console.log(products);
   return (
      <div className="px-5 py-10 relative">
         <h3 className="flex items-center gap-2 justify-start">
            <BiHome size={20} className="inline-block"></BiHome>{" "}
            <span>
               {" "}
               {location.pathname
                  .slice(1, location.pathname.length)
                  .split("/")
                  .join(" >> ")
                  .toUpperCase()}
            </span>
         </h3>
         <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
            {products.map((product, idx) => (
               <ProductCard key={idx} product={product}></ProductCard>
            ))}
         </div>
      </div>
   );
};

export default ProductPage;

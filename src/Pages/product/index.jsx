import { BiHome } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../../Components/productCard/ProductCard";

import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../Configs/libs";
import Loading from "../../Components/Loading";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductPage = () => {
   const location = useLocation();
   const { subcategoryId } = useParams();
   const { cart } = useContext(CartContext);
   const { data: products = [], isLoading } = useQuery({
      queryKey: ["products", subcategoryId],
      queryFn: async () => {
         const res = await fetch(`${baseURL}/sub-category/p/${subcategoryId}`);

         const data = await res.json();
         return data.data.products;
      },
   });
   console.log(cart);

   // console.log(products);
   return (
      <div className="px-5 py-10 relative">
         {isLoading && <Loading></Loading>}
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

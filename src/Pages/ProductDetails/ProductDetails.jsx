import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../Configs/libs";
import { AiFillCloseCircle } from "react-icons/ai";
import InnerImageZoom from "react-inner-image-zoom";
import { BiMinus } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import AddToCartButton from "../../Components/Buttons/AddToCartButton";

const ProductDetails = () => {
   const [quantity, setQuantity] = useState(0);
   const [user, setUser] = useState({
      role: "user",
   });
   const { productId } = useParams();

   const { data: product = {} } = useQuery({
      queryKey: ["product", productId],
      queryFn: async () => {
         if (productId) {
            const res = await fetch(`${baseURL}/product/${productId}`);
            const data = await res.json();
            return data.data;
         }
         return {};
      },
   });
   return (
      <div className="w-full mx-auto bg-secondary px-5  my-auto py-5 flex rounded-lg ">
         <div className="flex flex-col gap-5 md:flex-row  w-full">
            <div className=" w-full md:w-[1/2]  flex items-center justify-center gap-5">
               <InnerImageZoom
                  className="object-contain"
                  src={product.thumbnail}
                  zoomScale={2}
               />
            </div>
            <div className="w-full  md:w-[1/2] ">
               <h2 className=" sm:text-2xl lg:text-[26px] font-extrabold capitalize">
                  {product.productName}
               </h2>
               <p className="px-2 my-1 py-[1px] rounded-full inline-block bg-primary bg-opacity-75 text-primary text-sm  capitalize font-medium ">
                  <span className="text-white ml-1">stock : </span>
                  <span className="text-red-500">{product?.quantity}</span>
               </p>
               <p className=" text-gray-700 text-base my-5">
                  Most fresh vegetables are low in calories and have a water
                  content in excess of 70 percent, with only about 3.5 percent
                  protein and less than 1 percent fat. ... The root vegetables
                  include beets, carrots, radishes, sweet potatoes, and turnips.
                  Stem vegetables include asparagus and kohlrabi.
               </p>
               <h3 className="text-3xl font-bold ">
                  <span className="text-red-500">
                     ${" "}
                     {user?.role === "dealer" ? (
                        product.dealerPrice
                     ) : (
                        <>
                           {product.price -
                              (product.price * product.discount) / 100}
                        </>
                     )}
                  </span>
                  <small className="text-[24px]">
                     <del>${product.price}</del>
                  </small>
               </h3>
               <div className="flex items-center  gap-5 justify-between my-3">
                  <div className=" w-1/2 gap-5 rounded-md flex items-center justify-between bg-white border border-gray-400">
                     <button
                        className={`p-3 ${
                           quantity === 0 && " cursor-not-allowed"
                        }`}
                        disabled={quantity === 0}
                        onClick={() => setQuantity((prev) => prev - 1)}
                     >
                        <BiMinus
                           size={20}
                           className="text-black text-xl font-bold"
                        ></BiMinus>
                     </button>
                     <span className="text-xl">{quantity}</span>
                     <button
                        className={`p-3 ${
                           quantity === product.quantity &&
                           " cursor-not-allowed"
                        }`}
                        disabled={quantity === product?.quantity}
                     >
                        <HiPlus
                           size={20}
                           className="text-black text-xl font-bold"
                           onClick={() => setQuantity((prev) => prev + 1)}
                        ></HiPlus>
                     </button>
                  </div>
                  <div className="w-1/2">
                     <AddToCartButton
                        containerStyles={`py-[10px] font-bold`}
                     ></AddToCartButton>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;

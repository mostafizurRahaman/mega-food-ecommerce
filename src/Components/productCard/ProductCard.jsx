/* eslint-disable react/prop-types */
import ProductModal from "../ProducModal/ProductModal";
import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";

const ProductCard = ({ product }) => {
   const [productModal, setProductModal] = useState(false);
   const [quantity, setQuantity] = useState(0);
   const user = { role: "user" };
   return (
      <>
         <div className="bg-white hover:shadow-[5px_5px_5px_5px_#ddd] p-2 rounded-md">
            <div className="relative p-2  group mb-2 duration-300 transition-all ease-in-out">
               <div>
                  <img
                     src={product?.thumbnail}
                     className=" w-[85%] md:w-full md:h-[180px]  h-[150px] object-cover"
                     alt=""
                  />
               </div>
               <div className="flex items-center justify-center flex-col">
                  <p className="text-sm">
                     {product.quantity} {product.unit}
                  </p>
                  <h3 className="text-xl">
                     <span className="font-bold mr-2  text-red-500">
                        $
                        {user?.role === "dealer"
                           ? product?.dealerPrice
                           : product?.price}
                     </span>
                     <small>
                        <del>
                           $
                           {product.price -
                              parseFloat(
                                 (product?.price * product.discount) / 100
                              )}
                        </del>
                     </small>
                  </h3>
               </div>
               <div className="hidden group-hover:block  w-full h-full  ">
                  <div className="flex  w-full h-full top-0 left-0 absolute  items-center justify-center rounded-md  capitalize bg-black bg-opacity-[60%] ">
                     <div className="flex items-center justify-center gap-2">
                        <button
                           className={`p-3 ${
                              quantity === 0 && "cursor-not-allowed"
                           }`}
                           disabled={quantity === 0}
                           onClick={() => setQuantity((prev) => prev - 1)}
                        >
                           <BiMinus
                              size={20}
                              className="text-secondary hover:text-red-500  "
                           ></BiMinus>
                        </button>
                        <h2 className="text-secondary ">
                           {" "}
                           {quantity > 0 ? (
                              <span className="text-4xl text-secondary">
                                 {quantity}
                              </span>
                           ) : (
                              <span>Add to Cart</span>
                           )}
                        </h2>
                        <button
                           className={`p-3 ${
                              quantity === product.quantity &&
                              "cursor-not-allowed"
                           }`}
                           disabled={quantity === product?.quantity}
                        >
                           <HiPlus
                              size={20}
                              className="text-secondary hover:text-red-500  "
                              onClick={() => setQuantity((prev) => prev + 1)}
                           ></HiPlus>
                        </button>
                     </div>
                     <button
                        className="absolute bottom-1 -translate-x-1/2 left-1/2 text-sm z-999 px-5 py-2 w-[96%] rounded-md bg-secondary text-black"
                        onClick={() => setProductModal(true)}
                     >
                        show details
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <button className="px-5 py-2 w-full rounded-md text-secondary bg-primary">
                  Add to cart
               </button>
            </div>
         </div>
         {productModal && (
            <ProductModal
               product={product}
               quantity={quantity}
               setQuantity={setQuantity}
               modalShow={productModal}
               setModalShow={setProductModal}
            ></ProductModal>
         )}
      </>
   );
};

export default ProductCard;

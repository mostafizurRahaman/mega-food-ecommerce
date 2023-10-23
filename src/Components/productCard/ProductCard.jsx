/* eslint-disable react/prop-types */
import ProductModal from "../ProducModal/ProductModal";
import { useContext, useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { CartContext } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
   const [productModal, setProductModal] = useState(false);
   const [quantity, setQuantity] = useState(0);
   const { cart, setCart } = useContext(CartContext);
   const user = {
      role: "user",
   };

   const IncrementQuantity = (item) => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      console.log("first", savedCart);
      if (quantity < product.stock) {
         const isExist = savedCart?.find((i) => i._id === item._id);
         const rest = savedCart?.filter((i) => i._id !== item._id) || [];
         console.log(isExist);
         console.log(rest);
         if (!isExist) {
            setQuantity(quantity + 1);
            setCart([...rest, { _id: item._id, quantity: 1, ...item }]);
            localStorage.setItem(
               "cart",
               JSON.stringify([
                  ...rest,
                  {
                     _id: item._id,
                     quantity: 1,
                     ...item,
                  },
               ])
            );
         } else {
            setQuantity(isExist.quantity + 1);
            setCart([
               ...rest,
               {
                  _id: isExist._id,
                  quantity: isExist.quantity + 1,
                  ...item,
               },
            ]);
            localStorage.setItem(
               "cart",
               JSON.stringify([
                  ...rest,
                  {
                     _id: isExist._id,
                     quantity: isExist.quantity + 1,
                     ...item,
                  },
               ])
            );
         }
         // console.log("last", cart);
      }
   };

   const DecrementQuantity = (item) => {
      if (quantity > 0) {
         const savedCart = JSON.parse(localStorage.getItem("cart"));
         const isExist = savedCart?.find((i) => i._id === item._id);
         const rest = savedCart.filter((i) => i._id !== item._id) || [];
         if (isExist.quantity === 1) {
            setQuantity(0);
            setCart([...rest]);
            localStorage.setItem("cart", JSON.stringify([...rest]));
         } else {
            setQuantity(isExist.quantity - 1);
            const newCart = [
               ...rest,
               {
                  _id: isExist._id,
                  quantity: isExist.quantity - 1,
                  ...item,
               },
            ];
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
         }
      }
   };

   useEffect(() => {
      const currentItem = cart?.find((i) => i._id === product._id);
      setQuantity(currentItem?.quantity || 0);
   }, [product._id, cart]);

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
                     {product.stock}
                     {product.unit}
                  </p>
                  <h3 className="text-xl">
                     <span className="font-bold mr-2  text-red-500">
                        $
                        {user?.role === "dealer" ? (
                           product?.dealerPrice
                        ) : (
                           <>
                              {product.price -
                                 parseFloat(
                                    (product?.price * product.discount) / 100
                                 )}
                           </>
                        )}
                     </span>
                     <small>
                        <del>${product.price}</del>
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
                           onClick={() => DecrementQuantity(product)}
                        >
                           <BiMinus
                              size={30}
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
                              quantity === product.stock && "cursor-not-allowed"
                           }`}
                           disabled={quantity === product.stock}
                        >
                           <HiPlus
                              size={30}
                              className="text-secondary hover:text-red-500   "
                              onClick={() => IncrementQuantity(product)}
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
               {quantity >= 1 ? (
                  <div className=" gap-5 rounded-md flex items-center justify-between bg-primary text-white border border-gray-400">
                     <button
                        className={`p-3  text-white ${
                           quantity === 0 && " cursor-not-allowed"
                        }`}
                        disabled={quantity === 0}
                        onClick={() => DecrementQuantity(product)}
                     >
                        <BiMinus
                           size={20}
                           className="text-white text-xl font-bold"
                        ></BiMinus>
                     </button>
                     <span className="text-xl">{quantity}</span>
                     <button
                        className={`p-3 text-white ${
                           quantity === product.stock && " cursor-not-allowed"
                        }`}
                        disabled={quantity === product?.stock}
                        onClick={() => IncrementQuantity(product)}
                     >
                        <HiPlus
                           size={20}
                           className="text-white text-xl font-bold"
                        ></HiPlus>
                     </button>
                  </div>
               ) : (
                  <button
                     onClick={() => IncrementQuantity(product)}
                     className="px-5 py-2 w-full rounded-md text-secondary bg-primary"
                  >
                     Add to cart
                  </button>
               )}
            </div>
         </div>
         {productModal && (
            <ProductModal
               product={product}
               quantity={quantity}
               setQuantity={setQuantity}
               modalShow={productModal}
               setModalShow={setProductModal}
               IncrementQuantity={IncrementQuantity}
               DecrementQuantity={DecrementQuantity}
            ></ProductModal>
         )}
      </>
   );
};

export default ProductCard;

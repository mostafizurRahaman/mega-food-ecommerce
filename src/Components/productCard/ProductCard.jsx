import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductCard = () => {
   return (
      <div className="bg-white hover:shadow-[5px_5px_5px_5px_#ddd] p-2 rounded-md">
         <div className="relative p-2  group mb-2 duration-300 transition-all ease-in-out">
            <div>
               <img
                  src="https://chaldn.com/_mpimage/mr-noodles-chicken-cup-noodles-40-gm-combo-6-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141657&q=best&v=1&m=400&webp=1"
                  className="w-full h-full"
                  alt=""
               />
            </div>
            <div className="flex items-center justify-center flex-col">
               <p className="text-sm">500gm</p>
               <h3 className="text-xl">
                  <span className="font-bold mr-2  text-red-500">$50</span>{" "}
                  <small>
                     <del>$50</del>
                  </small>
               </h3>
            </div>
            <div className="hidden group-hover:block ">
               <div className="flex  w-full h-full bg-black top-0 left-0 absolute  items-center justify-center rounded-md bg-opacity-[60%] capitalize ">
                  <div className="flex items-center justify-center gap-2">
                     <FaPlus
                        className="text-secondary hover:text-red-500 cursor-pointer "
                        size={20}
                     ></FaPlus>
                     <h2 className="text-secondary ">Add to card</h2>
                     <FaMinus
                        className="text-secondary  hover:text-red-500 cursor-pointer "
                        size={20}
                     ></FaMinus>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <button className="px-5 py-2 w-full rounded-md text-secondary bg-primary">
               Add to cart
            </button>
         </div>
      </div>
   );
};

export default ProductCard;

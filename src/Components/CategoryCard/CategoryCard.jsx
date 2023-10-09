/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const CategoryCard = ({ _id, image, title, path }) => {
   return (
      <div
         // className="text-center"
         className="bg-secondary shadow-[5px_2px_2px_1px_#ddd] text-center p-3 rounded-md hover:shadow-[5px_2px_5px_5px_#ddd] duration-300 transition-all ease-in"
      >
         <img src={image} alt="" className="w-full h-auto" />
         <Link
            className="text-red-500 hover:underline capitalize"
            to={`/food${path}`}
         >
            {title}
         </Link>
      </div>
   );
};

export default CategoryCard;

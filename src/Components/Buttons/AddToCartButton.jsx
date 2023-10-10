/* eslint-disable react/prop-types */
const AddToCartButton = ({ containerStyles }) => {
   return (
      <button
         className={`w-full rounded-md text-secondary bg-primary ${containerStyles}`}
      >
         Add to cart
      </button>
   );
};

export default AddToCartButton;

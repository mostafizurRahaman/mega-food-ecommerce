/* eslint-disable react/prop-types */
const AddToCartButton = ({ containerStyles, onClick }) => {
   return (
      <button
         onClick={onClick}
         className={`w-full rounded-md text-secondary bg-primary ${containerStyles}`}
      >
         Add to cart
      </button>
   );
};

export default AddToCartButton;

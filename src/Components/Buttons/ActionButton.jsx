// eslint-disable-next-line react/prop-types
const ActionButton = ({ containerStyles, children }) => {
   return (
      <button
         className={`px-5 py-2 hover:scale-75 duration-500 transition-all  ${containerStyles}`}
      >
         {children}
      </button>
   );
};

export default ActionButton;

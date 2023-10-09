import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import foodCategories from "../../Configs/demodata";

const Food = () => {
   return (
      <div className="mt-10 px-5">
         <h2 className="md:text-2xl lg:text-3xl italic  text-primary  underline mb-1 px-3  ">
            Food
         </h2>
         <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3  py-5 ">
            {foodCategories.map((i, idx) => (
               <CategoryCard
                  key={idx}
                  title={i.title}
                  path={i.path}
                  image={i.image}
               ></CategoryCard>
            ))}
         </div>
      </div>
   );
};

export default Food;

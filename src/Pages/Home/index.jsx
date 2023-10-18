import FeatureSection from "../../Components/FeaturesSection/FeatureSection";
import PopularCategorySection from "../../Components/PopularCatgorySection/PopularCategorySection";
import BannerSection from "../../Components/BannerSection/BannerSection";

const Home = () => {
   return (
      <div className="duration-500 transition-all w-full">
         <div>
            <BannerSection></BannerSection>
         </div>
         <FeatureSection></FeatureSection>
         <PopularCategorySection></PopularCategorySection>
      </div>
   );
};

export default Home;

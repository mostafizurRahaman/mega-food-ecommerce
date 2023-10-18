import FeatureSection from "../../Components/FeaturesSection/FeatureSection";
import PopularCategorySection from "../../Components/PopularCatgorySection/PopularCategorySection";
import BannerSection from "../../Components/BannerSection/BannerSection";
import GetMoreSection from "../../Components/GetMoreSection/GetMoreSection";
import NecessitiesSection from "../../Components/NecessitiesSection/NecessitiesSection";

const Home = () => {
   return (
      <div className="duration-500 transition-all w-full">
         <div>
            <BannerSection></BannerSection>
         </div>
         <FeatureSection></FeatureSection>
         <PopularCategorySection></PopularCategorySection>
         <GetMoreSection></GetMoreSection>
         <NecessitiesSection></NecessitiesSection>
      </div>
   );
};

export default Home;

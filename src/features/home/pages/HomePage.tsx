import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../../products/components/FeaturedProduct";
import CategoriesSection from "../components/categorieSection";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/landingPage/Newsletter";


function HomePage() {
    return (
        <div>
            <HeroSection />
            <CategoriesSection />
            <FeaturedProducts />
            <PromoBanner />
            <WhyChooseUs />
            <Newsletter />
        </div>
    );
}

export default HomePage;
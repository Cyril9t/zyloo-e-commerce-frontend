import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../../products/components/FeaturedProduct";
import CategoriesSection from "../components/categorieSection";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/landingPage/Newsletter";


function HomePage() {
    return (
        <div className="mx-auto w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8">

            <HeroSection />

            <CategoriesSection />
            <div className="justify-self-center">
                <FeaturedProducts />
            </div>
            <PromoBanner />
            <WhyChooseUs />
            <Newsletter />
        </div>
    );
}

export default HomePage;
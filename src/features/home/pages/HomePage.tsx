import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../../products/components/FeaturedProduct";
import CategoriesSection from "../components/categorieSection";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/landingPage/Newsletter";
import CursorRingField from "../../../components/originkit/ui/cursor-ring-field";
import { useEffect, useState } from "react";


function HomePage() {
    const [isDark, setIsDark] = useState(false);
    // Detect Tailwind Dark Mode dynamically
    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);


    return (
        <div className="relative mx-auto w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8">
            <div className='absolute top-0 bottom-0 right-0 left-0  w-full h-full'>
                <CursorRingField colors={!isDark ? ["#000000"] : ["oklch(0.145 0 0)", "oklch(0.145 0 0)"]} background={isDark ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)'} />
            </div>
            <div className='block md:hidden  absolute top-0 bottom-0 right-0 left-0  w-full h-full'>
                <CursorRingField colors={!isDark ? ["#000000"] : ["oklch(0.145 0 0)", "oklch(0.145 0 0)"]} background={isDark ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)'} dotSize={300} />
            </div>
            <HeroSection />

            <CategoriesSection />

            <PromoBanner />
            <WhyChooseUs />
            <Newsletter />
        </div>
    );
}

export default HomePage;
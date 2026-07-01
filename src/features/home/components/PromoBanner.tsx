import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    originalPrice?: string;
    badge?: string;
    image: string;
    bgColor: string; // Tailwind gradient classes
    ctaText: string;
}

const PREMIUM_PRODUCTS: ProductSlide[] = [
    {
        id: 1,
        badge: "New Release",
        title: "SonicWave Pro",
        subtitle: "Wireless Noise-Cancelling Headphones",
        description: "Experience pure audio bliss with hybrid active noise cancellation and up to 60 hours of playback time.",
        price: "$249.00",
        originalPrice: "$299.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        bgColor: "",
        ctaText: "Shop Sound"
    },
    {
        id: 2,
        badge: "Limited Edition",
        title: "Chrono Classic v4",
        subtitle: "Minimalist Automatic Timepiece",
        description: "Crafted with surgical-grade stainless steel and scratch-resistant sapphire crystal. Waterproof up to 100m.",
        price: "$580.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        bgColor: "",
        ctaText: "Explore Craft"
    },
    {
        id: 3,
        badge: "Trending",
        title: "AeroStride One",
        subtitle: "Next-Gen Performance Running Shoes",
        description: "Featuring engineered mesh for breathability and our proprietary nitro-infused foam for maximum energy return.",
        price: "$145.00",
        originalPrice: "$175.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        bgColor: "",
        ctaText: "Gear Up"
    }
];

export default function PromoBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % PREMIUM_PRODUCTS.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + PREMIUM_PRODUCTS.length) % PREMIUM_PRODUCTS.length);
    };


    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Changes slide every 5 seconds

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <div
            className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-foreground"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slide Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-out h-[500px] md:h-[450px]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {PREMIUM_PRODUCTS.map((product) => (
                    <div
                        key={product.id}
                        className={`w-full h-full flex-shrink-0 bg-gradient-to-r ${product.bgColor} relative flex flex-col md:flex-row items-center px-8 md:px-16 py-12 overflow-hidden`}
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" />

                        {/* Left Content Column */}
                        <div className="w-full md:w-full flex flex-col justify-center text-white z-10 space-y-4 md:space-y-5 text-center md:text-left">
                            {product.badge && (
                                <div className="mx-auto md:mx-0 max-w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider  backdrop-blur-md border  rounded-full text-indigo-200">
                                    {product.badge}
                                </div>
                            )}

                            <div className="space-y-1">
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                                    {product.title}
                                </h2>
                                <p className="text-lg md:text-xl font-medium text-zinc-300">
                                    {product.subtitle}
                                </p>
                            </div>

                            <p className="text-sm md:text-base text-zinc-400 max-w-md line-clamp-2 md:line-clamp-none">
                                {product.description}
                            </p>

                            <div className="flex items-baseline justify-center md:justify-start space-x-3">
                                <span className="text-2xl md:text-3xl font-bold text-white">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-sm md:text-base text-zinc-500 line-through font-medium">{product.originalPrice}</span>
                                )}
                            </div>

                            <div className="pt-2">
                                <button className="group inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm tracking-wide shadow-lg transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]">
                                    {product.ctaText}
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        {/* Right Image Column */}
                        <div className="w-full md:w-full h-full relative flex items-center justify-center mt-6 md:mt-0 z-10">
                            <div className="relative w-full h-full md:w-full md:h-full group">
                                {/* Product Drop Shadow Effect */}
                                <div className="absolute rounded-full filter blur-2xl transform scale-75 translate-y-8" />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Manual Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10 z-20 opacity-0 group-hover:opacity-100 md:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-all backdrop-blur-sm border border-white/10 z-20 opacity-0 group-hover:opacity-100 md:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {PREMIUM_PRODUCTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
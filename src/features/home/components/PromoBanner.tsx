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
        }, 5000);

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <div
            className="group relative w-full max-w-7xl mx-auto overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slide Container */}
            <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {PREMIUM_PRODUCTS.map((product) => (
                    <div
                        key={product.id}
                        className="w-full shrink-0 relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-6 md:py-10 gap-8"
                    >
                        {/* Content Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
                            {product.badge && (
                                <div className="mx-auto md:mx-0 max-w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-foreground/5 text-foreground rounded-full border border-border">
                                    {product.badge}
                                </div>
                            )}

                            <div className="space-y-1">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                                    {product.title}
                                </h2>
                                <p className="text-base sm:text-lg font-medium text-muted-foreground">
                                    {product.subtitle}
                                </p>
                            </div>

                            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto md:mx-0 line-clamp-3">
                                {product.description}
                            </p>

                            <div className="flex items-baseline justify-center md:justify-start space-x-3 pt-1">
                                <span className="text-2xl sm:text-3xl font-bold text-foreground">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-base text-muted-foreground line-through font-medium">{product.originalPrice}</span>
                                )}
                            </div>

                            <div className="pt-2">
                                <button className="group/btn inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:opacity-90 active:scale-[0.98]">
                                    {product.ctaText}
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 relative flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-2xl border border-border shadow-md transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Manual Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-all border border-border shadow-md z-30 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-all border border-border shadow-md z-30 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 pt-4">
                {PREMIUM_PRODUCTS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
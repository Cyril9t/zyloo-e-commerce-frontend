import { useEffect, useState } from "react";
import { ArrowRight, ShoppingBag, Store } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import Globe from "./Layout/RotateEath"; // Importing your Globe component

export default function HeroSection() {
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
        <section className="relative overflow-hidden border-b duration-300">
            <div className="grid items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:px-10 lg:gap-12 lg:px-12 lg:py-20">
                {/* Left Column: Hero Content */}
                <div className="space-y-6 md:space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1.5 text-xs font-medium backdrop-blur-sm md:px-4 md:py-2 md:text-sm">
                        <ShoppingBag className="h-3.5 w-3.5 text-primary md:h-4 md:w-4" />
                        <span>Premium Global Shopping</span>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                            Discover Products You'll Love
                        </h1>

                        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Explore premium products carefully selected for quality, style,
                            and everyday value. Connecting shoppers worldwide with unmatched simplicity.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <Link to={PATHS.customer.profile}>
                            <Button size="lg" className="px-6 py-2.5 md:px-8 md:py-3">
                                Shop Now
                            </Button>
                        </Link>
                        <Link to={PATHS.customer.products}>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-6 py-2.5 md:px-8 md:py-3"
                            >
                                Browse Categories
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Globe Canvas with Overlay Badge */}
                <div className="flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-3xl border bg-muted from-muted/30 to-muted/80 shadow-xl backdrop-blur-md">
                        {/* Logo Overlay Badge */}
                        <div className="absolute left-4 top-4 z-20 flex items-center gap-2.5 rounded-2xl border bg-background/80 px-3.5 py-2 shadow-sm backdrop-blur-md sm:left-6 sm:top-6 ">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-inner">
                                <Store className="h-7 w-7" />
                            </div>
                            <span className="text-xs font-bold tracking-wide uppercase text-foreground sm:text-sm">
                                Zyloo
                            </span>
                        </div>

                        {/* Dynamic Globe Renderer */}
                        <div className="h-full w-full mt-3 md:mt-0">
                            <Globe
                                scale={7.5}
                                speed={2.5}
                                oceanColor=""
                                fill="dots"
                                dots={{
                                    color: isDark ? "#ffffffcc" : "#09090b",
                                    size: 4,
                                    density: 8,
                                    allDots: false,
                                }}
                                outlineColor={isDark ? "rgba(5, 22, 9, 0.35)" : "oklch(0.145 0 0)"}
                                showOutline={true}
                                graticuleColor={isDark ? "rgba(204, 194, 194, 0.33)" : "rgba(0, 0, 0, 0.93)"}
                                showGrid={true}
                                markerConfig={{
                                    markers: [
                                        { lat: 40.7128, lng: -74.006 }, // New York
                                        { lat: 51.5074, lng: -0.1278 }, // London
                                        { lat: 35.6762, lng: 139.6503 }, // Tokyo
                                        { lat: 6.5244, lng: 3.3792 }, // Lagos
                                    ],
                                    color: isDark ? "#38bdf8" : "#0284c7",
                                    size: 35,
                                }}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { ArrowRight, ShoppingBag, Store } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

export default function HeroSection() {
    return (
        <section className="border-b">
            <div className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8 lg:py-12 md:grid-cols-2 lg:grid-cols-2">

                <div className="space-y-6 md:space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                        <ShoppingBag className="h-3.5 md:h-4 w-3.5 md:w-4" />
                        Premium Shopping Experience
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Discover Products You'll Love
                        </h1>

                        <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Explore premium products carefully selected for quality,
                            style, and everyday value. Shopping has never been this
                            simple.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <Link to={PATHS.customer.profile}>
                            <Button size="lg" className="px-6 md:px-8 py-2 md:py-3">
                                Shop Now
                            </Button>
                        </Link>
                        <Link to={PATHS.customer.products}>
                            <Button variant="outline" size="lg" className="px-6 md:px-8 py-2 md:py-3">
                                Browse Categories
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>


                <div className="flex items-center justify-center">
                    <div className="flex aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg items-center justify-center rounded-2xl md:rounded-3xl border bg-muted">
                        <Store className="h-20 sm:h-24 md:h-28 lg:h-32 w-20 sm:w-24 md:w-28 lg:w-32 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </section>
    );
}
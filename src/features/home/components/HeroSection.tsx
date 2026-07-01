import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function HeroSection() {
    return (
        <section className="border-b ">
            <div className="grid  items-center gap-10 px-10 py-8 lg:grid-cols-2">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
                        <ShoppingBag className="h-4 w-4" />
                        Premium Shopping Experience
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            Discover Products You'll Love
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground">
                            Explore premium products carefully selected for quality,
                            style, and everyday value. Shopping has never been this
                            simple.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="p-6">
                            Shop Now
                        </Button>

                        <Button variant="outline" size="lg" className="p-6">
                            Browse Categories
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex items-center justify-center">
                    <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border bg-muted">
                        <ShoppingBag className="h-32 w-32 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </section>
    );
}
import { Button } from "../../ui/button";
import bg1 from "../../../assets/bg2.jpg"
import { Shield, Star, Truck, Zap } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: 'Free Shipping',
        description: 'On orders over $50',
    },
    {
        icon: Shield,
        title: 'Secure Payment',
        description: '100% protected',
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: '2-3 days shipping',
    },
    {
        icon: Star,
        title: 'Premium Quality',
        description: 'Guaranteed satisfaction',
    },
];

export default function HeroSection() {

    const year = new Date().getFullYear();

    return (

        <div>
            {/* ==================== Hero ==================== */}
            <section className="bg-muted">
                {/* Desktop */}
                <div className="hidden md:block py-6">
                    <div className="mx-auto flex max-w-[86%] flex-row-reverse items-center gap-0 px-6 lg:px-8">
                        {/* Image */}
                        <div className="flex-1">
                            <img
                                src={bg1}
                                alt="The Art of Minimalism"
                                className="h-[650px] w-full rounded-3xl object-cover shadow-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 max-w-xl">
                            <h1 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                Spring / Summer {year}
                            </h1>

                            <h2 className="mt-4 text-6xl font-bold leading-tight lg:text-7xl">
                                The Art Of Minimalism
                            </h2>

                            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
                                Discover a curated selection of architectural silhouettes and
                                premium fabrics designed for the modern wardrobe.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Button size="lg" className="p-6">
                                    Shop New Arrivals
                                </Button>

                                <Button variant="outline" size="lg" className="p-6">
                                    View Collection
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="relative md:hidden">
                    <img
                        src={bg1}
                        alt="The Art of Minimalism"
                        className="h-[600px] w-full object-cover"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-10 pt-24 text-white">
                        <h1 className="text-xs font-semibold uppercase tracking-[0.3em]">
                            Spring / Summer {year}
                        </h1>

                        <h2 className="mt-3 text-4xl font-bold leading-tight">
                            The Art Of Minimalism
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-white/90">
                            Discover a curated selection of architectural silhouettes and
                            premium fabrics designed for the modern wardrobe.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button variant="secondary">
                                Shop New Arrivals
                            </Button>

                            <Button variant="ghost" className="text-white hover:text-white">
                                View Collection
                            </Button>
                        </div>
                    </div>
                </div>
                {/* ==================== Features ==================== */}
                <section className="border-b bg-background border-border  py-16">
                    <div className="mx-auto max-w-[106%] px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center space-y-3 text-center"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                                        <feature.icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm leading-6 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

        </div>
    )
}
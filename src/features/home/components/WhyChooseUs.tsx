import { Truck, ShieldCheck, Headset } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

const features = [
    {
        icon: Truck,
        title: "Free Premium Shipping",
        description: "Complimentary express delivery on all orders over $100.",
    },
    {
        icon: ShieldCheck,
        title: "Encrypted Payments",
        description: "Your transactions are protected with bank-grade 256-bit SSL encryption.",
    },
    {
        icon: Headset,
        title: "24/7 Dedicated Support",
        description: "Our specialist team is always available for real-time assistance.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                {/* Left Column: Fixed Header Context */}
                <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
                        Our Guarantee
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                        Why Shop <br className="hidden lg:inline" />
                        With Us
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-md leading-relaxed">
                        We prioritize your shopping experience. From swift logistics to uncompromising safety, we cover every detail.
                    </p>
                </div>

                {/* Right Column: Premium Feature Cards */}
                <div className="lg:col-span-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
                    {features.map(({ icon: Icon, title, description }, index) => (
                        <Card
                            key={title}
                            className="group relative overflow-hidden border border-zinc-200/80 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 rounded-2xl transition-all duration-300 hover:bg-zinc-50/50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-sm hover:shadow-md"
                        >
                            <CardContent className="p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5">
                                {/* Micro-interactive Icon Container */}
                                <div className="relative flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                    <Icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300 group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-1.5 pt-0.5">
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                                        {description}
                                    </p>
                                </div>

                                {/* Subtle Subtle Card Number Index (Top Right) */}
                                <span className="absolute top-4 right-6 text-xs font-mono font-bold text-zinc-300 dark:text-zinc-800 pointer-events-none select-none">
                                    0{index + 1}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
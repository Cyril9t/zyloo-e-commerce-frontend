import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from "../../../components/ui/card";
import { Link } from 'react-router-dom';
import { PATHS } from '../../../routes/paths';

interface Category {
    name: string;
    count: string;
    image: string;
    sizeClass: string;
}

const premiumCategories: Category[] = [
    {
        name: "Apparel & Outerwear",
        count: "142 Items",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-2 md:row-span-2 h-[340px] md:h-full",
    },
    {
        name: "Footwear",
        count: "84 Items",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-2 h-[240px] md:h-[280px]",
    },
    {
        name: "Accessories",
        count: "210 Items",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-2 h-[240px] md:h-[280px]",
    },
    {
        name: "Timepieces",
        count: "36 Items",
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-1 h-[200px] md:h-[240px]",
    },
    {
        name: "Eyewear",
        count: "48 Items",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-2 h-[200px] md:h-[240px]",
    },
    {
        name: "Travel Gear",
        count: "19 Items",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        sizeClass: "md:col-span-1 h-[200px] md:h-[240px]",
    },
];

export default function ShopByCategory() {
    return (
        <section className="w-full max-w-[95%] mx-auto px-1 py-7 md:py-18">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
                        Curated Collections
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                        Shop by Category
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-base max-w-md">
                        Explore meticulously designed structures curated for individual styles and functional needs.
                    </p>
                </div>

                <Link to={PATHS.customer.products}>
                    <button className="group inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-50 underline underline-offset-4 decoration-2 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-primary transition-colors duration-200">
                        View All Departments
                        <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                </Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-auto gap-4">
                {premiumCategories.map((category) => (
                    <Card
                        key={category.name}
                        className={`group relative overflow-hidden rounded-2xl border-0 bg-zinc-100 dark:bg-zinc-900 cursor-pointer ${category.sizeClass}`}
                    >

                        <img
                            src={category.image}
                            alt={category.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />

                        {/* Premium Gradient Scrim for Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                        {/* Content Floating Elements */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                            <div className="flex items-end justify-between w-full">
                                <div className="space-y-0.5">
                                    <span className="text-xs font-mono font-medium text-zinc-300/90 tracking-wide block">
                                        {category.count}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Floating Modern Action Button */}
                                <div className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-black">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
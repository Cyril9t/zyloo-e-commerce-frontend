
import { Search, Star, SlidersHorizontal, RotateCcw, X, ArrowUpDown, Check } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../../../components/common/searchBar";
import { useEffect, useMemo, useState } from "react";
import ECommercePageLoader from "../../../components/common/UniversalLoadingState";
import { cn } from "../../../utils/cn";
import type { Products } from "../types/Product";
import { useAuth } from "../../../context/AuthProvider";

export interface FilterState {
    search: string;
    categories: string[];
    brands: string[];
    colors: string[];
    sizes: string[];
    priceRange: [number, number];
    rating: number | null;
    sortBy: string;
}

const INITIAL_FILTERS: FilterState = {
    search: "",
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    priceRange: [0, 5000],
    rating: null,
    sortBy: "featured",
};

export interface ProductResponse {
    product: Products[];
}

export default function ProductListingPage() {
    const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
    const [loading, setLoading] = useState<boolean>(false);
    const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);
    const { products, hangTight } = useAuth()




    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 300);

        return () => clearTimeout(timer);
    }, [filters]);




    const handleCheckboxChange = (key: "categories" | "brands", value: string, checked: boolean) => {
        setFilters((prev) => {
            const currentValues = prev[key];
            return {
                ...prev,
                [key]: checked ? [...currentValues, value] : currentValues.filter((item: string) => item !== value),
            };
        });
    };

    const toggleColor = (color: string) => {
        setFilters((prev) => ({
            ...prev,
            colors: prev.colors.includes(color) ? prev.colors.filter((item) => item !== color) : [...prev.colors, color],
        }));
    };

    const toggleSize = (size: string) => {
        setFilters((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size) ? prev.sizes.filter((item) => item !== size) : [...prev.sizes, size],
        }));
    };

    const removeFilter = (key: "categories" | "brands" | "colors" | "sizes" | "rating", value: string | number | null) => {
        setFilters((prev) => {
            if (key === "rating") {
                return { ...prev, rating: null };
            }

            const currentValues = prev[key] as string[];
            return {
                ...prev,
                [key]: currentValues.filter((item: string) => item !== value),
            };
        });
    };

    const hasActiveFilters = useMemo(() => {
        return JSON.stringify(filters) !== JSON.stringify(INITIAL_FILTERS);
    }, [filters]);

    const filteredProducts = useMemo(() => {
        return products
            .filter((product) => {
                if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
                    return false;
                }

                if (filters.categories.length && !product.category.some((cat) => filters.categories.includes(cat.name))) {
                    return false;
                }

                if (filters.brands.length && product.brand && !filters.brands.includes(product.brand)) {
                    return false;
                }

                if (filters.colors.length && product.colors && !product.colors.some((color) => filters.colors.includes(color))) {
                    return false;
                }

                if (filters.sizes.length && product.sizes && !product.sizes.some((size) => filters.sizes.includes(size))) {
                    return false;
                }

                if (filters.rating && (product.rating ?? 0) < filters.rating) {
                    return false;
                }

                if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
                    return false;
                }

                return true;
            })
            .sort((a, b) => {
                switch (filters.sortBy) {
                    case "price-low":
                        return a.price - b.price;
                    case "price-high":
                        return b.price - a.price;
                    case "rating":
                        return (b.rating ?? 0) - (a.rating ?? 0);
                    default:
                        return 0;
                }
            });
    }, [products, filters]);

    if (hangTight) return <ECommercePageLoader variant="grid" fullScreen={false} />

    return (
        <div className="w-full bg-background text-foreground antialiased selection:bg-neutral-200">
            {/* Search Bar at Top */}
            <div className="md:hidden block w-full border-b border-border/60 bg-background px-4 py-3 sm:px-6 sm:py-4">
                <SearchBar />
            </div>

            <div className=" w-full flex flex-col lg:flex-row  border-x border-border/40 ">

                {/* Mobile Filter Toggle Button */}
                <div className="lg:hidden flex items-center justify-between p-4 border-b border-border/60 bg-background">
                    <button
                        onClick={() => setFilterMenuOpen(!filterMenuOpen)}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md border border-border hover:bg-muted transition-colors"
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </button>
                    <div className="text-xs text-muted-foreground">
                        {filteredProducts.length} items
                    </div>
                </div>

                {/* Filter Sidebar - Hidden on mobile, visible on lg */}
                <aside className={`absolute lg:relative top-16 left-0 right-0 lg:top-auto lg:right-auto flex flex-col bg-background border-b lg:border-b-0 lg:border-r border-border/60 lg:h-[calc(100vh-0.8rem)] lg:sticky lg:top-16 pb-7 z-40 lg:w-[18%] max-h-[calc(100vh-8rem)] overflow-y-auto lg:max-h-none lg:overflow-y-auto ${filterMenuOpen ? 'block' : 'hidden lg:flex'}`}>
                    <div className="flex items-center justify-between p-4 pb-3 sticky top-0 bg-background z-10">
                        <div className="flex items-center gap-2 font-semibold tracking-tight text-xs uppercase">
                            <SlidersHorizontal className="h-4 w-4" />
                            <span>Filters</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setFilters(INITIAL_FILTERS)}
                                className="flex items-center text-xs font-normal text-muted-foreground hover:text-foreground transition-colors p-1"
                            >
                                <RotateCcw className="h-3 w-3 mr-1.5" />
                                Clear
                            </button>
                            <button
                                onClick={() => setFilterMenuOpen(false)}
                                className="lg:hidden p-1 hover:bg-muted rounded"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-2 space-y-6">

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Categories</h4>
                            <div className="space-y-2.5">
                                {[
                                    { label: "Apparel", count: 142 },
                                    { label: "Footwear", count: 89 },
                                    { label: "Outerwear", count: 31 },
                                    { label: "Accessories", count: 54 },
                                ].map((category) => (
                                    <div key={category.label} className="flex items-center justify-between text-sm">
                                        <label className="flex items-center gap-2.5 cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={filters.categories.includes(category.label)}
                                                onChange={(e) => handleCheckboxChange("categories", category.label, e.target.checked)}
                                                className="rounded border-input text-primary focus:ring-ring h-4 w-4"
                                            />
                                            {category.label}
                                        </label>
                                        <span className="text-xs font-mono text-muted-foreground/50">{category.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />


                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Price Ceiling</h4>
                            <input
                                type="range"
                                min="0"
                                max="500"
                                step="10"
                                value={filters.priceRange[1]}
                                onChange={(e) => setFilters((prev) => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }))}
                                className="w-full h-1 bg-muted accent-primary rounded-lg cursor-pointer"
                            />
                            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mt-2">
                                <span>$0</span>
                                <span className="bg-muted px-2 py-0.5 rounded border border-border">Max: ${filters.priceRange[1]}</span>
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />


                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Brands</h4>
                            <div className="space-y-2.5">
                                {["Studio Label", "Atelier X", "Nordic Craft", "Ethereal Wear"].map((brand) => (
                                    <label key={brand} className="flex items-center gap-2.5 text-sm cursor-pointer font-medium text-muted-foreground hover:text-foreground transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={filters.brands.includes(brand)}
                                            onChange={(e) => handleCheckboxChange("brands", brand, e.target.checked)}
                                            className="rounded border-input text-primary focus:ring-ring h-4 w-4"
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />
                        <div className="h-px bg-border/40" />

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">Minimum Rating</h4>
                            <div className="space-y-1.5">
                                {[5, 4, 3, 2].map((stars) => (
                                    <button
                                        key={stars}
                                        type="button"
                                        onClick={() => setFilters((prev) => ({ ...prev, rating: prev.rating === stars ? null : stars }))}
                                        className={cn(
                                            "flex items-center w-full gap-2 text-xs font-medium p-1.5 rounded transition-colors text-left",
                                            filters.rating === stars ? "bg-muted text-foreground font-semibold" : "text-muted-foreground hover:bg-muted/40"
                                        )}
                                    >
                                        <div className="flex text-amber-400">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className={cn("h-3.5 w-3.5", i < stars ? "fill-current" : "text-muted/20")} />
                                            ))}
                                        </div>
                                        <span>{stars === 5 ? "5 Stars" : "& Up"}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>


                {/* Mobile Filter Overlay Backdrop */}
                {filterMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                        onClick={() => setFilterMenuOpen(false)}
                    />
                )}

                <main className=" flex-1 p-4 lg:p-8  w-full h-screen overflow-scroll scrollbar-none">
                    {/* Top Sorting Bar Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-4 mb-5">
                        <div>
                            <h1 className="text-base sm:text-lg font-bold uppercase tracking-tight">ZYLOO Modern Collection</h1>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Displaying {filteredProducts.length} curated items
                            </p>
                        </div>

                        <div className="relative inline-block text-left self-end sm:self-auto">
                            <select
                                value={filters.sortBy}
                                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
                                className="appearance-none bg-background border border-input rounded-md pl-3.5 pr-8 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer transition-colors"
                            >
                                <option value="featured">Sort By: Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Customer Rated</option>
                            </select>
                            <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
                        </div>
                    </div>

                    {/* Active Filtering Badge Bar */}
                    {hasActiveFilters && (
                        <div className="flex flex-wrap items-center gap-1 mb-5 text-xs font-medium animate-in fade-in duration-200">
                            <span className="text-muted-foreground uppercase tracking-wider text-[10px] font-bold mr-0.5">Active:</span>
                            {filters.categories.map((cat) => (
                                <span key={cat} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted border text-foreground text-xs">
                                    {cat} <X className="h-3 w-3 cursor-pointer hover:text-primary" onClick={() => removeFilter("categories", cat)} />
                                </span>
                            ))}
                            {filters.brands.map((brand) => (
                                <span key={brand} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted border text-foreground text-xs">
                                    {brand} <X className="h-3 w-3 cursor-pointer hover:text-primary" onClick={() => removeFilter("brands", brand)} />
                                </span>
                            ))}
                            {filters.colors.map((color) => (
                                <span key={color} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted border text-foreground text-xs">
                                    {color} <X className="h-3 w-3 cursor-pointer hover:text-primary" onClick={() => removeFilter("colors", color)} />
                                </span>
                            ))}
                            {filters.sizes.map((size) => (
                                <span key={size} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted border text-foreground text-xs">
                                    {size} <X className="h-3 w-3 cursor-pointer hover:text-primary" onClick={() => removeFilter("sizes", size)} />
                                </span>
                            ))}
                            {filters.rating && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted border text-foreground text-xs">
                                    {filters.rating}+ Stars <X className="h-3 w-3 cursor-pointer hover:text-primary" onClick={() => removeFilter("rating", null)} />
                                </span>
                            )}
                            <button onClick={() => setFilters(INITIAL_FILTERS)} className="text-xs font-bold text-primary underline underline-offset-2 ml-1">
                                Clear all
                            </button>
                        </div>
                    )}

                    {/* Catalog Listing Grid */}
                    {loading ? (
                        <ECommercePageLoader variant="grid" fullScreen={false} />
                    ) : filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 border border-dashed rounded-xl bg-muted/5">
                            <p className="text-xs font-medium text-muted-foreground tracking-wide">No premium objects match your selections.</p>
                            <button onClick={() => setFilters(INITIAL_FILTERS)} className="mt-2 text-xs font-bold text-primary underline underline-offset-4">
                                Reset system parameters
                            </button>
                        </div>
                    ) : (
                        <main className="space-y-3">

                            <ProductGrid products={filteredProducts} />
                        </main>
                    )}
                </main>
            </div>
        </div >
    );
}
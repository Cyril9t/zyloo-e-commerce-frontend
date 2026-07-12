// import FilterSidebar from "../components/FilterSidebar";
// import ProductGrid from "../components/ProductGrid";
// import ProductsHeader from "../components/ProductsHeader";
// import SortDropdown from "../components/SortDropdown";
// import type { Product } from "../../products/types/Product";

// const products: Product[] = [
//     {
//         id: "1",
//         name: "Wireless Headphones",
//         category: "Electronics",
//         price: 299,
//         originalPrice: 349,
//         image: "https://picsum.photos/600?random=1",
//         rating: 4.8,
//         reviews: 120,
//     },
//     {
//         id: "2",
//         name: "Gaming Mouse",
//         category: "Accessories",
//         price: 79,
//         image: "https://picsum.photos/600?random=2",
//         rating: 4.7,
//         reviews: 95,
//     },
//     {
//         id: "3",
//         name: "Running Shoes",
//         category: "Fashion",
//         price: 150,
//         image: "https://picsum.photos/600?random=3",
//         rating: 4.9,
//         reviews: 210,
//     },
//     {
//         id: "4",
//         name: "Smart Watch",
//         category: "Electronics",
//         price: 199,
//         image: "https://picsum.photos/600?random=4",
//         rating: 4.6,
//         reviews: 84,
//     },
// ];

// export default function ProductListingPage() {
//     return (
//         <section className="container max-w-7xl mx-auto px-4 py-10 md:py-16 space-y-10">
//             {/* Top Section: Header & Controls grouped cleaner */}
//             <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
//                 <ProductsHeader />

//                 <div className="flex items-center justify-between gap-4 md:justify-end">
//                     <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
//                         Showing <span className="text-foreground font-semibold">{products.length}</span> products
//                     </p>
//                     <SortDropdown />
//                 </div>
//             </div>

//             {/* Layout Grid */}
//             <div className="grid gap-8 lg:grid-cols-[240px_1fr] items-start">
//                 <aside className="sticky top-20 hidden lg:block">
//                     <FilterSidebar />
//                 </aside>

//                 <main className="space-y-6">
//                     <ProductGrid products={products} />
//                 </main>
//             </div>
//         </section>
//     );
// }



import * as React from "react";
import { Search, Star, SlidersHorizontal, RotateCcw, X, ArrowUpDown, Check } from "lucide-react";
import ProductGrid from "../components/ProductGrid";

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
export interface FilterState {
    search: string;
    categories: string[];
    priceRange: [number, number];
    brands: string[];
    rating: number | null;
    availability: 'all' | 'in-stock' | 'out-of-stock';
    colors: string[];
    sizes: string[];
    sortBy: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    brand: string;
    price: number;
    rating: number;
    inStock: boolean;
    colors: string[];
    sizes: string[];
    image: string;
}

const INITIAL_FILTERS: FilterState = {
    search: '',
    categories: [],
    priceRange: [0, 500],
    brands: [],
    rating: null,
    availability: 'all',
    colors: [],
    sizes: [],
    sortBy: 'featured',
};

// ==========================================
// 2. MOCK PRODUCTION DATA
// ==========================================
const MOCK_PRODUCTS: Product[] = [
    { id: "1", name: "Minimalist Merino Sweater", category: "Apparel", brand: "Studio Label", price: 180, rating: 5, inStock: true, colors: ["Black", "Slate"], sizes: ["M", "L"], image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80" },
    { id: "2", name: "Bespoke Leather Chelsea Boot", category: "Footwear", brand: "Atelier X", price: 340, rating: 4, inStock: true, colors: ["Black"], sizes: ["S", "M", "L"], image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80" },
    { id: "3", name: "Premium Waterproof Shell", category: "Outerwear", brand: "Nordic Craft", price: 420, rating: 5, inStock: false, colors: ["White", "Olive"], sizes: ["L", "XL"], image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&q=80" },
    { id: "4", name: "Architectural Silk Scarf", category: "Accessories", brand: "Ethereal Wear", price: 95, rating: 4, inStock: true, colors: ["Crimson", "Royal Blue"], sizes: ["XS", "S"], image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" },
];

// ==========================================
// 3. UTILITY FUNCTION (Tailwind Merge)
// ==========================================
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}

// ==========================================
// 4. MAIN MONOLITHIC COMPONENT
// ==========================================
export default function ProductListingPage() {
    const [filters, setFilters] = React.useState<FilterState>(INITIAL_FILTERS);
    const [loading, setLoading] = React.useState<boolean>(false);

    // Simulated API fetch delay on state adjustments
    React.useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, [filters]);

    const handleCheckboxChange = (key: 'categories' | 'brands', value: string, checked: boolean) => {
        setFilters((prev) => ({
            ...prev,
            [key]: checked ? [...prev[key], value] : prev[key].filter((item) => item !== value),
        }));
    };

    const toggleColor = (color: string) => {
        setFilters((prev) => ({
            ...prev,
            colors: prev.colors.includes(color) ? prev.colors.filter((c) => c !== color) : [...prev.colors, color],
        }));
    };

    const toggleSize = (size: string) => {
        setFilters((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size) ? prev.sizes.filter((s) => s !== size) : [...prev.sizes, size],
        }));
    };

    const removeFilter = (key: keyof FilterState, value: any) => {
        setFilters((prev) => {
            if (Array.isArray(prev[key])) {
                return { ...prev, [key]: (prev[key] as any[]).filter((item) => item !== value) };
            }
            return { ...prev, [key]: INITIAL_FILTERS[key] };
        });
    };

    const hasActiveFilters = React.useMemo(() => {
        return JSON.stringify(filters) !== JSON.stringify(INITIAL_FILTERS);
    }, [filters]);

    // Client side sorting and processing 
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
        if (filters.categories.length > 0 && !filters.categories.includes(product.category)) return false;
        if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false;
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
        if (filters.rating && product.rating < filters.rating) return false;
        if (filters.availability === "in-stock" && !product.inStock) return false;
        if (filters.availability === "out-of-stock" && product.inStock) return false;
        if (filters.colors.length > 0 && !product.colors.some((c) => filters.colors.includes(c))) return false;
        if (filters.sizes.length > 0 && !product.sizes.some((s) => filters.sizes.includes(s))) return false;
        return true;
    }).sort((a, b) => {
        if (filters.sortBy === "price-low") return a.price - b.price;
        if (filters.sortBy === "price-high") return b.price - a.price;
        if (filters.sortBy === "rating") return b.rating - a.rating;
        return 0; // featured default
    });

    return (
        <div className="w-full bg-background text-foreground antialiased selection:bg-neutral-200">


            <div className=" w-full flex flex-col lg:flex-row  border-x border-border/40">

                {/* ==========================================
            SIDEBAR PANEL
           ========================================== */}
                <aside className=" flex flex-col bg-background border-r border-border/60 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16 pb-7 z-20">
                    <div className="flex items-center justify-between p-4 pb-3">
                        <div className="flex items-center gap-2 font-semibold tracking-tight text-xs uppercase">
                            <SlidersHorizontal className="h-4 w-4" />
                            <span>Filters</span>
                        </div>
                        <button
                            onClick={() => setFilters(INITIAL_FILTERS)}
                            className="flex items-center text-xs font-normal text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                            <RotateCcw className="h-3 w-3 mr-1.5" />
                            Clear All
                        </button>
                    </div>

                    {/* <div className="px-4 pb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
                            <input
                                type="text"
                                placeholder="Search collection..."
                                value={filters.search}
                                onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                                className="w-full bg-muted/40 border border-input rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                            />
                        </div>
                    </div> */}

                    <div className="h-px bg-border/60 mx-4" />

                    {/* Simple Clean Native Form Stack (Can replace with Accordion layout if requested) */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-2 space-y-6">
                        {/* Categories Selection */}
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

                        {/* Price Selection */}
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

                        {/* Brands Selection */}
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

                        {/* Color Palette Picker */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Colors</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    { name: "Black", hex: "#000000" },
                                    { name: "White", hex: "#FFFFFF", border: true },
                                    { name: "Slate", hex: "#64748B" },
                                    { name: "Crimson", hex: "#DC2626" },
                                    { name: "Royal Blue", hex: "#2563EB" },
                                    { name: "Olive", hex: "#65A30D" },
                                ].map((c) => {
                                    const isSelected = filters.colors.includes(c.name);
                                    return (
                                        <button
                                            key={c.name}
                                            type="button"
                                            onClick={() => toggleColor(c.name)}
                                            className={cn(
                                                "relative h-7 w-7 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                                c.border && "border border-border"
                                            )}
                                            style={{ backgroundColor: c.hex }}
                                            title={c.name}
                                        >
                                            {isSelected && (
                                                <Check className={cn("absolute inset-0 m-auto h-4 w-4", c.name === "White" ? "text-black" : "text-white")} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />

                        {/* Size Tile Picker */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Sizes</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {["XS", "S", "M", "L", "XL"].map((size) => {
                                    const isSelected = filters.sizes.includes(size);
                                    return (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => toggleSize(size)}
                                            className={cn(
                                                "h-9 border rounded text-xs font-semibold tracking-wider uppercase transition-all duration-200",
                                                isSelected
                                                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                                    : "border-input bg-background hover:bg-muted text-muted-foreground"
                                            )}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="h-px bg-border/40" />

                        {/* Customer Review Filter */}
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

                {/* ==========================================
            PRODUCT CATALOG SHELL
           ========================================== */}
                <main className="flex-1 p-6 lg:p-8 w-full">
                    {/* Top Sorting Bar Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5 mb-6">
                        <div>
                            <h1 className="text-lg font-bold uppercase tracking-tight">ZYLOO Modern Collection</h1>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Displaying {filteredProducts.length} curated objects
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
                        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs font-medium animate-in fade-in duration-200">
                            <span className="text-muted-foreground uppercase tracking-wider mr-1 text-[10px] font-bold">Active:</span>
                            {filters.categories.map((cat) => (
                                <span key={cat} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted border text-foreground">
                                    {cat} <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter("categories", cat)} />
                                </span>
                            ))}
                            {filters.brands.map((brand) => (
                                <span key={brand} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted border text-foreground">
                                    {brand} <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter("brands", brand)} />
                                </span>
                            ))}
                            {filters.colors.map((color) => (
                                <span key={color} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted border text-foreground">
                                    {color} <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter("colors", color)} />
                                </span>
                            ))}
                            {filters.sizes.map((size) => (
                                <span key={size} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted border text-foreground">
                                    {size} <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter("sizes", size)} />
                                </span>
                            ))}
                            {filters.rating && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-muted border text-foreground">
                                    {filters.rating}+ Stars <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter("rating", null)} />
                                </span>
                            )}
                            <button onClick={() => setFilters(INITIAL_FILTERS)} className="text-xs font-bold text-primary underline underline-offset-4 ml-1.5">
                                Clear all
                            </button>
                        </div>
                    )}

                    {/* Catalog Listing Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="space-y-4 animate-pulse">
                                    <div className="bg-muted aspect-[4/5] rounded-lg" />
                                    <div className="h-4 bg-muted rounded w-2/3" />
                                    <div className="h-3 bg-muted rounded w-1/3" />
                                </div>
                            ))}
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 border border-dashed rounded-xl bg-muted/5">
                            <p className="text-xs font-medium text-muted-foreground tracking-wide">No premium objects match your selections.</p>
                            <button onClick={() => setFilters(INITIAL_FILTERS)} className="mt-2 text-xs font-bold text-primary underline underline-offset-4">
                                Reset system parameters
                            </button>
                        </div>
                    ) : (
                        <main className="space-y-6">

                            <ProductGrid products={filteredProducts} />
                        </main>
                    )}
                </main>
            </div>


        </div >
    );
}
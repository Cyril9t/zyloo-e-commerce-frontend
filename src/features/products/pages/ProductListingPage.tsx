import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import ProductsHeader from "../components/ProductsHeader";
import SortDropdown from "../components/SortDropdown";
import type { Product } from "../types/Product";

const products: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        category: "Electronics",
        price: 299,
        originalPrice: 349,
        image: "https://picsum.photos/600?random=1",
        rating: 4.8,
        reviews: 120,
    },
    {
        id: "2",
        name: "Gaming Mouse",
        category: "Accessories",
        price: 79,
        image: "https://picsum.photos/600?random=2",
        rating: 4.7,
        reviews: 95,
    },
    {
        id: "3",
        name: "Running Shoes",
        category: "Fashion",
        price: 150,
        image: "https://picsum.photos/600?random=3",
        rating: 4.9,
        reviews: 210,
    },
    {
        id: "4",
        name: "Smart Watch",
        category: "Electronics",
        price: 199,
        image: "https://picsum.photos/600?random=4",
        rating: 4.6,
        reviews: 84,
    },
];

export default function ProductListingPage() {
    return (
        <section className="container max-w-7xl mx-auto px-4 py-10 md:py-16 space-y-10">
            {/* Top Section: Header & Controls grouped cleaner */}
            <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between">
                <ProductsHeader />

                <div className="flex items-center justify-between gap-4 md:justify-end">
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        Showing <span className="text-foreground font-semibold">{products.length}</span> products
                    </p>
                    <SortDropdown />
                </div>
            </div>

            {/* Layout Grid */}
            <div className="grid gap-8 lg:grid-cols-[240px_1fr] items-start">
                <aside className="sticky top-20 hidden lg:block">
                    <FilterSidebar />
                </aside>

                <main className="space-y-6">
                    <ProductGrid products={products} />
                </main>
            </div>
        </section>
    );
}
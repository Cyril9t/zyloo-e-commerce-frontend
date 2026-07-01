import ProductCard from "../../products/components/ProductCard";
import type { Product } from "../../products/types/Product";
import EnhancedProductCard from "../../home/components/landingPage/product";
import { Button } from "../../../components/ui/button";
import { MoveRightIcon, Zap } from "lucide-react";

const products: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        category: "Electronics",
        price: 299,
        originalPrice: 349,
        image: "https://picsum.photos/500?random=1",
        rating: 4.8,
        reviews: 124,
    },
    {
        id: "2",
        name: "Modern Chair",
        category: "Furniture",
        price: 180,
        image: "https://picsum.photos/500?random=2",
        rating: 4.6,
        reviews: 87,
    },
    {
        id: "3",
        name: "Running Shoes",
        category: "Fashion",
        price: 120,
        originalPrice: 150,
        image: "https://picsum.photos/500?random=3",
        rating: 4.9,
        reviews: 310,
    },
    {
        id: "4",
        name: "Smart Watch",
        category: "Accessories",
        price: 250,
        image: "https://picsum.photos/500?random=4",
        rating: 4.7,
        reviews: 201,
    },
];

export default function FeaturedProducts() {
    return (
        <section className="container-page py-6 px-10 mt-10">

            <h2 className="text-3xl font-bold">Featured Products</h2>



            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    {/* <p className='font-bold flex gap-4 mb-3 mt-20'><Zap /> Flash Sale</p>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Limited Time Deals
                    </h2> */}

                    <p className="mt-2 text-muted-foreground">
                        Discover our most popular products.
                    </p>
                </div>

                <Button variant="link" className="self-start px-0 sm:self-auto flex">
                    View All <MoveRightIcon />
                </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
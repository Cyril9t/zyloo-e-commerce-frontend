import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

const relatedProducts: Product[] = [
    {
        id: "1",
        name: "Gaming Headset",
        category: "Electronics",
        price: 199,
        image: "https://picsum.photos/600?random=11",
        rating: 4.8,
        reviews: 156,
    },
    {
        id: "2",
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 149,
        image: "https://picsum.photos/600?random=12",
        rating: 4.7,
        reviews: 98,
    },
    {
        id: "3",
        name: "Smart Watch",
        category: "Accessories",
        price: 249,
        image: "https://picsum.photos/600?random=13",
        rating: 4.9,
        reviews: 204,
    },
    {
        id: "4",
        name: "Wireless Mouse",
        category: "Accessories",
        price: 89,
        image: "https://picsum.photos/600?random=14",
        rating: 4.6,
        reviews: 73,
    },
];

export default function RelatedProducts() {
    return (
        <section className="mt-20">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    Related Products
                </h2>

                <p className="mt-2 text-muted-foreground">
                    You may also like these products.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}
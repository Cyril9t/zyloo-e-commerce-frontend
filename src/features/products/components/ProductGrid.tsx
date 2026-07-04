import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({
    products,
}: ProductGridProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

import ProductCard from "./ProductCard";
import type { Products } from "../types/Product";

interface ProductGridProps {
    products: Products[];
}

export default function ProductGrid({ products }: ProductGridProps) {


    return (
        <div className="grid gap-2  sm:grid-cols-3 xl:grid-cols-4 gap-y-1">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
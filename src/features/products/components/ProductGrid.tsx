import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface ProductGridProps {
    products: Product[] | any;
}

export default function ProductGrid({
    products,
}: ProductGridProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product: any) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}
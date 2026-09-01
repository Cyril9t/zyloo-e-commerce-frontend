import { Heart, Eye } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import type { Products } from "../types/Product";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



interface ProductCardProps {
    product: Products;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [price, setPrice] = useState(1)
    const [isActive, setIsActive] = useState(false);

    const productImage =
        product.images?.length
            ? product.images[0].productImages
            : "https://placehold.co/600x800?text=No+Image";

    const category = product.category.length === 1
        ? product?.category?.map((item) => item.name).join(", ")
        : "Uncategorized";

    useEffect(() => {
        if (product?.productItems?.length) {
            setPrice(product.productItems[0].price);
        }
    }, [])

    const handleTouchStart = () => {
        setIsActive(true);
    };

    const handleTouchEnd = () => {
        setIsActive(false);
    };

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };



    return (
        <div className="w-full overflow-hidden px-2 py-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:overflow-x-auto scroll-smooth scrollbar-none">
                <div
                    key={product.id}
                    className={`group relative shrink-0 w-full md:w-75 h-auto md:h-120 bg-background border rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 cursor-pointerer flex flex-row md:flex-col ${isActive ? 'shadow-lg border-primary' : 'border-border'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >

                    {/* Image Section */}
                    <div className="relative w-27.5 sm:w-35 md:w-full h-auto md:h-[60%] shrink-0 overflow-hidden bg-muted">
                        <img
                            src={productImage}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                        />

                        <Badge
                            variant="secondary"
                            className="absolute top-2 left-2 text-[10px] md:text-xs font-semibold bg-black/60 text-white backdrop-blur-md px-2 py-0.5"
                        >
                            {category}
                        </Badge>

                        {/* Quick Action Icons */}
                        <div className={`absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-1.5 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-100 md:opacity-0 md:translate-x-4'}`}>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-background/80 backdrop-blur-md shadow-sm"
                            >
                                <Heart className="w-3.5 h-3.5 md:w-5 md:h-5" />
                            </Button>

                            <Button
                                variant="secondary"
                                size="icon"
                                className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-background/80 backdrop-blur-md shadow-sm"
                            >
                                <Eye className="w-3.5 h-3.5 md:w-5 md:h-5" />
                            </Button>
                        </div>

                        {/* Desktop View Details Button */}
                        <Link to={`/products/${product.id}`} className="hidden md:block">
                            <button
                                className={`absolute bottom-0 left-0 right-0 bg-foreground text-background py-3 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                            >
                                <Eye className="w-5 h-5" />
                                View Details
                            </button>
                        </Link>
                    </div>


                    {/* Content Section */}
                    <div className="flex-1 min-w-0 p-3 md:p-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-sm md:text-xl font-bold truncate">
                                {product.name}
                            </h3>

                            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mt-1">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-2 md:mt-0 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-1">
                                    {/* <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> */}
                                    <span className="text-xs text-muted-foreground">
                                        {/* ({product.reviews ?? 4}) */}
                                    </span>
                                </div>

                                <p className="text-sm md:text-xl font-bold">
                                    ₦ {price}
                                </p>
                            </div>

                            <Link to={`/products/${product.id}`} className="block md:hidden">
                                <Button size="sm" className="h-8 w-8 p-0 rounded-lg">
                                    <Eye className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}





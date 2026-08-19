import { Star, ShoppingCart, Heart, Eye, View, ViewIcon, LucideView } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import type { Products } from "../types/Product";
import { createCart } from "../../../lib/actions";
import { PATHS } from "../../../routes/paths";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { number } from "zod";


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

    const tags =
        product.tag?.length
            ? product.tag.map((item) => item.name).join(", ")
            : "No Tag";



    useEffect(() => {
        const prices = product?.productItems?.map((item) => (setPrice(item.price)))
        console.log(price)
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

        <div>
            <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none">
                <div
                    key={product.id}
                    className={`mb-20 group relative shrink-0 w-full h-full md:w-[300px] md:h-[480px] bg-background border-2 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${isActive ? 'shadow-lg' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >

                    <div className="relative h-[60%] overflow-hidden">
                        <img
                            src={productImage}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                        />

                        <Badge
                            variant="outline"
                            className="absolute top-4 left-4 text-white"
                        >
                            {category}
                        </Badge>


                        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <Heart className="w-5 h-5" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full"
                            >
                                <Eye className="w-5 h-5" />
                            </Button>
                        </div>
                        <Link to={`/products/${product.id}`}>

                            <button
                                className={`absolute bottom-0 left-0 right-0 bg-foreground text-background py-3 flex items-center justify-center gap-2 font-medium transition-all duration-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                            >
                                <LucideView className="w-5 h-5" />
                                View Details
                            </button>
                        </Link>
                    </div>


                    <div className="h-[40%] p-4">
                        <h3 className="text-xl font-bold truncate">
                            {product.name}
                        </h3>

                        <p className="text-muted-foreground line-clamp-1 mt-2">
                            {product.description}
                        </p>
                        <div className="flex items-center gap-1 mt-3">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                            <span className="text-sm text-muted-foreground">
                                ({product.reviews ?? 4})
                            </span>
                        </div>

                        <p className="text-xl font-bold mt-3">
                            $ {price}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}





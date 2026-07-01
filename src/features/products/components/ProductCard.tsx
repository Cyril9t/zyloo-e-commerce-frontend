import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";

import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <div className=" flex gap-6 overflow-x-auto scroll-smooth scrollbar-none">


                <div
                    key={product.id}
                    className=" mb-20 group relative shrink-0 w-[300px] h-[480px] bg-background border-2 rounded-3xl overflow-hidden"
                >

                    <div className="relative h-[60%] overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <Badge

                            variant="outline"
                            className="absolute top-4 left-4 text-white"
                        >
                            {product.category}
                        </Badge>


                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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

                        <button
                            className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-3 flex products-center justify-center gap-2 font-medium translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                    </div>


                    <div className="h-[40%] p-4">
                        <h3 className="text-xl font-bold truncate">
                            {product.name}
                        </h3>

                        <p className="text-muted-foreground line-clamp-1 mt-2">
                            {/* {product.description} */}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id atque adipisci voluptates consequatur expedita rem, voluptate temporibus ullam, doloribus consequuntur, dicta voluptatem ab porro recusandae quos aperiam quidem autem.
                        </p>
                        <div className="flex products-center gap-1 mt-3">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">
                                ({product.reviews})
                            </span>
                        </div>
                        <p className="text-xl font-bold mt-3">
                            ${product.price}
                        </p>
                    </div>

                </div>

            </div>

            {/* <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-square overflow-hidden bg-muted">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <CardContent className="space-y-3 pt-4">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            {product.category}
                        </p>

                        <h3 className="font-semibold">
                            {product.name}
                        </h3>
                    </div>

                    <div className="flex products-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                            ({product.reviews})
                        </span>
                    </div>

                    <div className="flex products-center gap-2">
                        <span className="text-lg font-bold">
                            ${product.price}
                        </span>

                        {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>
                </CardContent>

                <CardFooter>
                    <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card> */}


        </div>
    );
}
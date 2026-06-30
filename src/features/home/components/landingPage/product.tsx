import productList from "../../../../components/ui/productList.js"
import b2 from "../../../../assets/bg2.jpg"
import { Badge } from '../../../../components/ui/badge.js';
import { Button } from '../../../../components/ui/button.js';
import { Eye, Heart, MoveRightIcon, ShoppingCart, Zap } from 'lucide-react';

export default function EnhancedProductCard() {

    return (
        <div className='mx-auto max-w-7xl'>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className='font-bold flex gap-4 mb-3 mt-20'><Zap /> Flash Sale</p>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Limited Time Deals
                    </h2>

                    <p className="mt-3 max-w-lg text-muted-foreground">
                        Hurry! this deals wont last long
                    </p>
                </div>

                <Button variant="link" className="self-start px-0 sm:self-auto flex">
                    View All <MoveRightIcon />
                </Button>
            </div>
            <div className=" mb-20 flex gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-10">

                {productList.map((item) => (
                    <div
                        key={item.id}
                        className=" mb-20 group relative shrink-0 w-[300px] h-[480px] bg-background border-2 rounded-3xl overflow-hidden"
                    >

                        <div className="relative h-[60%] overflow-hidden">
                            <img
                                src={b2}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <Badge
                                variant="outline"
                                className="absolute top-4 left-4 text-white"
                            >
                                {item.category}
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
                                className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-3 flex items-center justify-center gap-2 font-medium translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>


                        <div className="h-[40%] p-4">
                            <h3 className="text-xl font-bold truncate">
                                {item.name}
                            </h3>

                            <p className="text-muted-foreground line-clamp-2 mt-2">
                                {item.description}
                            </p>

                            <p className="text-2xl font-bold mt-4">
                                ${item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

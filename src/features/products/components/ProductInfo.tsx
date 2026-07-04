import { Heart, Star, Truck } from "lucide-react";
import { Button } from "../../../components/ui/button";
import QuantitySelector from "./QuantitySelector";
export default function ProductInfo() {
    return (
        <div className="space-y-6">
            <div>
                <p className="text-sm text-muted-foreground">
                    Electronics
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                    Wireless Noise Cancelling Headphones
                </h1>
            </div>

            <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                <span className="font-medium">
                    4.8
                </span>

                <span className="text-muted-foreground">
                    (125 Reviews)
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                    $299
                </span>

                <span className="text-lg text-muted-foreground line-through">
                    $349
                </span>
            </div>

            <p className="leading-7 text-muted-foreground">
                Experience premium sound quality with industry-leading noise
                cancellation, long battery life, and unmatched comfort for everyday
                listening.
            </p>

            <QuantitySelector />

            <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                    Add to Cart
                </Button>

                <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex items-center gap-3 rounded-xl border p-4">
                <Truck className="h-6 w-6 text-primary" />

                <div>
                    <p className="font-medium">
                        Free Shipping
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Delivered in 3–5 business days.
                    </p>
                </div>
            </div>
        </div>
    );
}
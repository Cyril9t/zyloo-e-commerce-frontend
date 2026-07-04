import { Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import QuantitySelector from "../../products/components/QuantitySelector";

export default function CartItem() {
    return (
        <div className="flex gap-6 rounded-2xl border p-6">
            <img
                src="https://picsum.photos/200"
                alt="Product"
                className="h-28 w-28 rounded-xl object-cover"
            />

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">
                        Electronics
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                        Wireless Headphones
                    </h3>

                    <p className="mt-2 text-xl font-bold">
                        $299
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <QuantitySelector />

                    <Button variant="ghost" size="icon">
                        <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
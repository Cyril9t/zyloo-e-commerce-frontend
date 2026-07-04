import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { PATHS } from "../../../routes/paths";

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-20 text-center">
            <div className="mb-6 rounded-full bg-muted p-6">
                <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>

            <h2 className="text-2xl font-bold">
                Your cart is empty
            </h2>

            <p className="mt-3 max-w-md text-muted-foreground">
                Looks like you haven't added any products yet. Start exploring our
                collection and find something you'll love.
            </p>

            <Button asChild className="mt-8">
                <Link to={PATHS.customer.products}>
                    Continue Shopping
                </Link>
            </Button>
        </div>
    );
}
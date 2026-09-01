import { ShoppingBag } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

export function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-20 lg:py-28 border-2 border-dashed rounded-xl bg-card/20 text-center px-4 max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="p-4 bg-muted/50 border border-border/30 rounded-full mb-5">
                <ShoppingBag className="h-8 w-8 text-muted-foreground/60 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">Your cart is empty</h3>
            <p className="text-xs text-muted-foreground mt-1.5 max-w-xs leading-relaxed">
                Looks like you haven't added anything yet. Explore our premium arrivals to gather curated additions.
            </p>
            <Button className="mt-6 h-10 px-6 text-xs font-semibold uppercase tracking-wider" asChild>
                <Link to={PATHS.customer.products}>Continue Shopping</Link>
            </Button>
        </div>
    );
}
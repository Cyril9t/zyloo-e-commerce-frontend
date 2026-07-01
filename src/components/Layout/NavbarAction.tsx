import { Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import IconBadge from "../common/IconBadge";
export default function NavbarActions() {
    return (
        <div className="flex items-center gap-2">
            {/* Wishlist */}
            <div className="relative">
                <Button variant="ghost" size="icon" aria-label="Wishlist">
                    <Heart className="h-5 w-5" />
                </Button>

                <IconBadge count={5} />
            </div>

            {/* Cart */}
            <div className="relative">
                <Button variant="ghost" size="icon" aria-label="Cart">
                    <ShoppingCart className="h-5 w-5" />
                </Button>

                <IconBadge count={2} />
            </div>

            {/* User */}
            <Button variant="ghost" size="icon" aria-label="Profile">
                <User className="h-5 w-5" />
            </Button>
        </div>
    );
}
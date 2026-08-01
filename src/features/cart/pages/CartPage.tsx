import { useState } from "react";
import CartItemCard from "../components/CartItem";
import { EmptyCart } from "../components/EmptyCart";
import { CartSummary } from "../components/CartSummary";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";


export interface CartItemType {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    size: string;
    color: string;
    colorHex: string;
    quantity: number;
    image: string;
    inStock: boolean;
    stockCount?: number;
}

export interface RecommendedProductType {
    id: string;
    name: string;
    brand: string;
    price: number;
    rating: number;
    image: string;
}


const INITIAL_ITEMS: CartItemType[] = [
    {
        id: "item-1",
        name: "Minimalist Merino Knit Sweater",
        brand: "Studio Label",
        price: 180,
        size: "M",
        color: "Slate Grey",
        colorHex: "#64748B",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80",
        inStock: true
    },
    {
        id: "item-2",
        name: "Bespoke Calfskin Chelsea Boot",
        brand: "Atelier X",
        price: 340,
        size: "10",
        color: "Obsidian Black",
        colorHex: "#111827",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&q=80",
        inStock: true
    }
];


export default function CartPage() {
    const [items, setItems] = useState<CartItemType[]>(INITIAL_ITEMS);
    const [loading, setLoading] = useState(false);

    const handleUpdateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        );
        console.log(items)
    };

    const handleRemoveItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const navigate = useNavigate();
    const handleCheckout = () => {


        navigate(PATHS.customer.checkout)

    };


    const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const discount = subtotal > 300 ? 30 : 0;
    const shipping = subtotal > 250 || subtotal === 0 ? 0 : 20;
    const tax = Math.round(subtotal * 0.08);
    const itemCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <div className="w-full min-h-screen bg-background text-foreground antialiased selection:bg-neutral-200">
            <div className="max-w-7xl mx-auto w-full px-4 py-8 lg:py-12  border-border/30">

                {/* Navigation Breadcrumb */}
                <nav className="text-[11px] uppercase tracking-wider text-muted-foreground/80 mb-2">
                    <a href="/" className="hover:text-foreground transition-colors">Home</a>
                    <span className="mx-2 text-border">/</span>
                    <span className="text-foreground font-medium">Cart</span>
                </nav>

                {/* Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/40 pb-5 mb-8">
                    <h1 className="text-xl font-bold uppercase tracking-tight">Shopping Cart</h1>
                    <p className="text-xs text-muted-foreground font-medium">
                        Review your bag ({itemCount} {itemCount === 1 ? "item" : "items"})
                    </p>
                </div>

                {items.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Main Stream: Cart Items */}
                        <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                            {items.map((item) => (
                                <CartItemCard
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={handleUpdateQuantity}
                                    onRemove={handleRemoveItem}
                                />
                            ))}
                        </div>

                        {/* Right Sidebar: Sticky Order Summary */}
                        <div className="lg:col-span-5 xl:col-span-4">
                            <CartSummary
                                subtotal={subtotal}
                                shipping={shipping}
                                tax={tax}
                                discount={discount}
                                onCheckout={handleCheckout}
                                isCartEmpty={items.length === 0}
                            />
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}
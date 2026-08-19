import { useEffect, useState } from "react";
import CartItemCard from "../components/CartItem";
import { EmptyCart } from "../components/EmptyCart";
import { CartSummary } from "../components/CartSummary";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../routes/paths";
import { useAuth } from "../../../context/AuhProvider";
import type { Data } from "../../../context/AuhProvider";
import ECommercePageLoader from "../../../components/common/UniversalLoadingState";

export default function CartPage() {

    const { data, items, setItems, cartMutating } = useAuth();
    // const [items, setItems] = useState<Data[] | []>([]);

    useEffect(() => {
        setItems(data?.cart)
    }, [data])

    const handleUpdateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => (item?.id === id ? { ...item, quantity: item.quantity + delta } : item))
        );

    };

    const handleRemoveItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate(PATHS.customer.checkout)
    };

    const subtotal = items?.reduce((acc, curr) => acc + curr.productItem.price * curr.quantity, 0);
    const discount = subtotal > 300 ? 30 : 0;
    const shipping = subtotal > 250 || subtotal === 0 ? 0 : 20;
    const tax = Math.round(subtotal * 0.08);

    if (cartMutating) return <ECommercePageLoader variant="detail" fullScreen={false} />

    return (
        <div className="w-full min-h-screen bg-background text-foreground antialiased selection:bg-neutral-200">
            <div className="max-w-7xl mx-auto w-full px-4 py-8 lg:py-12  border-border/30">

                <nav className="text-[11px] uppercase tracking-wider text-muted-foreground/80 mb-2">
                    <a href="/" className="hover:text-foreground transition-colors">Home</a>
                    <span className="mx-2 text-border">/</span>
                    <span className="text-foreground font-medium">Cart</span>
                </nav>


                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/40 pb-5 mb-8">
                    <h1 className="text-xl font-bold uppercase tracking-tight">Shopping Cart</h1>
                    <p className="text-xs text-muted-foreground font-medium">
                        Review your bag ({items?.length} {data?.cart?.length === 1 ? "item" : "items"})
                    </p>
                </div>

                {items?.length === 0 || !items ? (
                    <EmptyCart />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 xl:col-span-8 space-y-4">

                            <CartItemCard
                                items={items}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemoveItem}
                            />

                        </div>

                        <div className="lg:col-span-5 xl:col-span-4">
                            <CartSummary
                                subtotal={subtotal}
                                shipping={shipping}
                                tax={tax}
                                discount={discount}
                                onCheckout={handleCheckout}
                                isCartEmpty={items?.length === 0}
                            />
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}
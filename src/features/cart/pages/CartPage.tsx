import * as React from "react";
import {
    Trash2,
    Heart,
    Minus,
    Plus,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    ShieldCheck,
    Lock,
    ShoppingBag,
    Star,
    ShoppingCart
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { Input } from "../../../components/ui/input";
import ProductGrid from "../../products/components/ProductGrid";



// ==========================================
// 1. DATA TYPES & INTERFACES
// ==========================================
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

// ==========================================
// 2. MOCK SEED DATA
// ==========================================
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

const RECOMMENDED_ITEMS: RecommendedProductType[] = [
    { id: "rec-1", name: "Architectural Silk Scarf", brand: "Ethereal Wear", price: 95, rating: 5, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" },
    { id: "rec-2", name: "Premium Full-Grain Cardholder", brand: "Atelier X", price: 65, rating: 4, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80" },
    { id: "rec-3", name: "Minimalist Leather Belt", brand: "Studio Label", price: 85, rating: 5, image: "https://images.unsplash.com/photo-1624222247344-550fb8ef5522?w=500&q=80" },
    { id: "rec-4", name: "Canvas Weekend Duffle Bag", brand: "Nordic Craft", price: 210, rating: 4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" }
];

// ==========================================
// 3. ATOMIC COMPONENTS
// ==========================================

/* --- CartItemCard --- */
interface CartItemCardProps {
    item: CartItemType;
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemove: (id: string) => void;
}

function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemCardProps) {
    return (
        <Card className="p-4 sm:p-6 overflow-hidden transition-all duration-300 hover:shadow-md border-border/60 bg-card/60 backdrop-blur-sm group">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Product Image */}
                <div className="relative h-28 w-24 sm:h-32 sm:w-28 bg-muted rounded-lg overflow-hidden border border-border/40 flex-shrink-0 mx-auto sm:mx-0">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-102"
                    />
                </div>

                {/* Content Details */}
                <div className="flex flex-col justify-between flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                            <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/90 block mb-0.5">
                                {item.brand}
                            </span>
                            <h3 className="text-sm font-medium text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                                {item.name}
                            </h3>

                            {/* Product Attributes */}
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    Color:
                                    <span
                                        className="h-3 w-3 rounded-full border border-border/80 inline-block shadow-sm"
                                        style={{ backgroundColor: item.colorHex }}
                                        title={item.color}
                                    />
                                    <strong className="text-foreground font-medium">{item.color}</strong>
                                </span>
                                <span className="text-border/80">|</span>
                                <span>Size: <strong className="text-foreground font-medium">{item.size}</strong></span>
                            </div>
                        </div>

                        {/* Pricing block */}
                        <div className="text-left sm:text-right mt-1 sm:mt-0">
                            <span className="text-sm font-mono font-semibold block text-foreground">
                                ${(item.price * item.quantity).toLocaleString()}
                            </span>
                            {item.quantity > 1 && (
                                <span className="text-[11px] font-mono text-muted-foreground/70 block mt-0.5">
                                    (${item.price} each)
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Management Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-border/40">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-input rounded-md bg-background shadow-sm h-9 overflow-hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                                className="h-full w-9 rounded-none text-muted-foreground hover:text-foreground hover:bg-muted"
                            >
                                <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-9 text-center text-xs font-mono font-medium select-none text-foreground">
                                {item.quantity}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="h-full w-9 rounded-none text-muted-foreground hover:text-foreground hover:bg-muted"
                            >
                                <Plus className="h-3 w-3" />
                            </Button>
                        </div>

                        {/* Utility Triggers */}
                        <div className="flex items-center gap-4">
                            <Badge
                                variant={item.inStock ? "secondary" : "destructive"}
                                className="text-[10px] font-medium tracking-wide gap-1 rounded px-2"
                            >
                                {item.inStock ? (
                                    <>
                                        <CheckCircle2 className="h-3 w-3 text-emerald-600 fill-emerald-100" /> In Stock
                                    </>
                                ) : (
                                    <>
                                        <AlertCircle className="h-3 w-3" /> Out of Stock
                                    </>
                                )}
                            </Badge>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground/70 hover:text-foreground hover:bg-muted"
                                title="Save for later"
                            >
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onRemove(item.id)}
                                className="h-8 w-8 text-muted-foreground/70 hover:text-destructive hover:bg-destructive/10"
                                title="Delete item"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

/* --- CartSummary --- */
interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    onCheckout: () => void;
    isCartEmpty: boolean;
}

function CartSummary({ subtotal, shipping, tax, discount, onCheckout, isCartEmpty }: CartSummaryProps) {
    const [couponCode, setCouponCode] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const grandTotal = subtotal + shipping + tax - discount;

    const handleApplyCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        if (!couponCode.trim()) return;
        setLoading(true);
        setTimeout(() => setLoading(false), 800);
    };

    return (
        <Card className="p-5 sm:p-6 border-border/50 bg-card shadow-sm space-y-5 lg:sticky lg:top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Order Summary</h3>

            {/* Price Grid */}
            <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="font-mono text-foreground">${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                        <span>Discount Applied</span>
                        <span className="font-mono">-${discount.toLocaleString()}</span>
                    </div>
                )}
                <div className="flex justify-between text-muted-foreground">
                    <span>Estimated Shipping</span>
                    <span className="font-mono text-foreground">
                        {shipping === 0 ? "Complimentary" : `$${shipping.toLocaleString()}`}
                    </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                    <span>Estimated Tax</span>
                    <span className="font-mono text-foreground">${tax.toLocaleString()}</span>
                </div>

                <Separator className="bg-border/40 my-2" />

                <div className="flex justify-between items-baseline pt-1">
                    <span className="text-base font-semibold text-foreground">Grand Total</span>
                    <span className="text-lg font-mono font-bold text-foreground">${grandTotal.toLocaleString()}</span>
                </div>
            </div>

            {/* Coupon Form */}
            <form onSubmit={handleApplyCoupon} className="space-y-2 pt-1">
                <label htmlFor="coupon" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Promotional Code
                </label>
                <div className="flex gap-2">
                    <Input
                        id="coupon"
                        type="text"
                        placeholder="ENTER CODE"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="h-9 text-xs focus-visible:ring-1 bg-muted/30 uppercase rounded-md tracking-wide"
                    />
                    <Button
                        type="submit"
                        variant="secondary"
                        size="sm"
                        disabled={loading || !couponCode.trim()}
                        className="h-9 px-4 border text-xs font-semibold tracking-wide"
                    >
                        {loading ? "..." : "Apply"}
                    </Button>
                </div>
            </form>

            {/* Primary Actions */}
            <div className="space-y-2.5 pt-2">
                <Button
                    onClick={onCheckout}
                    disabled={isCartEmpty}
                    className="w-full h-11 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 group"
                >
                    Proceed to Checkout
                    <ArrowRight className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-0.5" />
                </Button>

                <Button
                    variant="outline"
                    className="w-full h-11 text-xs font-semibold uppercase tracking-wider bg-transparent"
                    asChild
                >
                    <a href="/shop">Continue Shopping</a>
                </Button>
            </div>

            {/* Security Indicator */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground/80 bg-muted/40 py-2.5 px-3 rounded-md border border-border/30">
                <Lock className="h-3.5 w-3.5 text-foreground/70" />
                <span className="flex items-center gap-1 font-medium">
                    Secured Checkout via <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 inline -mt-0.5" /> Stripe
                </span>
            </div>
        </Card>
    );
}

/* --- EmptyCart --- */
function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-20 lg:py-28 border border-dashed border-border/60 rounded-xl bg-card/20 text-center px-4 max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="p-4 bg-muted/50 border border-border/30 rounded-full mb-5">
                <ShoppingBag className="h-8 w-8 text-muted-foreground/60 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">Your cart is empty</h3>
            <p className="text-xs text-muted-foreground mt-1.5 max-w-xs leading-relaxed">
                Looks like you haven't added anything yet. Explore our premium arrivals to gather curated additions.
            </p>
            <Button className="mt-6 h-10 px-6 text-xs font-semibold uppercase tracking-wider" asChild>
                <a href="/shop">Continue Shopping</a>
            </Button>
        </div>
    );
}

/* --- RecommendedProducts --- */
interface RecommendedProductsProps {
    products: RecommendedProductType[];
}

function RecommendedProducts({ products }: RecommendedProductsProps) {
    return (
        <section className="mt-16 pt-8 border-t border-border/40">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                You May Also Like
            </h4>

            <main className="space-y-6">

                <ProductGrid products={products} />
            </main>



        </section>
    );
}

// ==========================================
// 4. MAIN PAGE WRAPPER COMPONENT
// ==========================================
export default function CartPage() {
    const [items, setItems] = React.useState<CartItemType[]>(INITIAL_ITEMS);
    const [, setLoading] = React.useState(false);

    const handleUpdateQuantity = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        );
    };

    const handleRemoveItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Proceeding to secure checkout pipeline...");
        }, 1000);
    };

    // Aggregation Calculations
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

                {/* Dynamic Recommendations Block */}
                <RecommendedProducts products={RECOMMENDED_ITEMS} />
            </div>
        </div>
    );
}